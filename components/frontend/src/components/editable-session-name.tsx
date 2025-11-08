/**
 * EditableSessionName component
 * Allows inline editing of session display names with auto-edit mode for default names
 */

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type EditableSessionNameProps = {
  currentName: string;
  metadataName: string;
  onSave: (newName: string) => Promise<void>;
  isSaving?: boolean;
  className?: string;
};

/**
 * Check if the name matches the default pattern (agentic-session-{digits})
 */
function isDefaultName(name: string): boolean {
  return /^agentic-session-\d+$/.test(name);
}

export function EditableSessionName({
  currentName,
  metadataName,
  onSave,
  isSaving = false,
  className,
}: EditableSessionNameProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(currentName);
  const [hasChanges, setHasChanges] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-enter edit mode for default names on mount
  useEffect(() => {
    if (isDefaultName(currentName) || isDefaultName(metadataName)) {
      setIsEditing(true);
    }
  }, [currentName, metadataName]);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Update input value when currentName changes
  useEffect(() => {
    setInputValue(currentName);
    setHasChanges(false);
  }, [currentName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setHasChanges(newValue.trim() !== currentName && newValue.trim() !== '');
  };

  const handleSave = async () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue || trimmedValue === currentName) {
      setIsEditing(false);
      setInputValue(currentName);
      setHasChanges(false);
      return;
    }

    try {
      await onSave(trimmedValue);
      setIsEditing(false);
      setHasChanges(false);
    } catch (error) {
      // Error handling is done by the parent component via toast
      console.error('Failed to save session name:', error);
    }
  };

  const handleCancel = () => {
    setInputValue(currentName);
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  // If in edit mode, show input
  if (isEditing) {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            // Don't auto-close on blur if there are changes - user might want to click the Update button
            if (!hasChanges) {
              handleCancel();
            }
          }}
          placeholder="New session..."
          disabled={isSaving}
          className="text-3xl font-bold tracking-tight h-auto py-1 px-2"
        />
        {hasChanges && (
          <Button
            onClick={handleSave}
            disabled={isSaving}
            size="sm"
            className="whitespace-nowrap"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              'Update name'
            )}
          </Button>
        )}
      </div>
    );
  }

  // If not editing, show clickable title
  return (
    <h1
      className={cn(
        'text-3xl font-bold tracking-tight cursor-pointer hover:text-primary transition-colors',
        className
      )}
      onClick={() => setIsEditing(true)}
      title="Click to edit session name"
    >
      {currentName}
    </h1>
  );
}

