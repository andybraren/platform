"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import type { WorkflowConfig } from "../lib/types";

type WelcomeExperienceProps = {
  ootbWorkflows: WorkflowConfig[];
  onWorkflowSelect: (workflowId: string) => void;
  onUserInteraction: () => void;
  userHasInteracted: boolean;
  sessionPhase?: string;
};

const WELCOME_MESSAGE = `Welcome to Ambient AI! Your workspace and all of its context have been loaded. Please select a workflow below to get started, or type a message to begin chatting.`;

export function WelcomeExperience({
  ootbWorkflows,
  onWorkflowSelect,
  onUserInteraction,
  userHasInteracted,
  sessionPhase,
}: WelcomeExperienceProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | null>(null);

  // Determine if we should show workflow cards (only for Pending/Creating phases)
  const isInitialPhase = sessionPhase === "Pending" || sessionPhase === "Creating";
  const shouldShowAnimation = isInitialPhase && !userHasInteracted;
  const shouldShowWorkflowCards = isInitialPhase && !userHasInteracted;

  // Streaming text effect
  useEffect(() => {
    if (!shouldShowAnimation) {
      // Skip animation if session is already running or user has interacted
      setDisplayedText(WELCOME_MESSAGE);
      setIsTypingComplete(true);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < WELCOME_MESSAGE.length) {
        setDisplayedText(WELCOME_MESSAGE.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 50); // 50ms per character

    return () => clearInterval(interval);
  }, [shouldShowAnimation]);

  const handleWorkflowSelect = (workflowId: string) => {
    setSelectedWorkflowId(workflowId);
    onWorkflowSelect(workflowId);
    onUserInteraction();
  };

  const enabledWorkflows = ootbWorkflows.filter((w) => w.enabled);

  return (
    <div className="space-y-4">
      {/* Static welcome message styled like a chat message */}
      <div className="flex items-start gap-3 px-4 py-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold">Ambient AI</span>
            <span className="text-xs text-muted-foreground">just now</span>
          </div>
          <div className="text-sm text-foreground whitespace-pre-wrap">
            {displayedText}
            {shouldShowAnimation && !isTypingComplete && (
              <span className="inline-block w-1 h-4 ml-0.5 bg-primary animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Workflow cards - show after typing completes (only for initial phases) */}
      {shouldShowWorkflowCards && isTypingComplete && enabledWorkflows.length > 0 && (
        <div className="px-4 space-y-2">
          <p className="text-xs font-medium text-muted-foreground">
            Suggested workflows:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {enabledWorkflows.map((workflow) => (
              <Card
                key={workflow.id}
                className={`cursor-pointer transition-all hover:shadow-md hover:border-primary/50 ${
                  selectedWorkflowId === workflow.id
                    ? "border-primary bg-primary/5"
                    : selectedWorkflowId !== null
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                }`}
                onClick={() => {
                  if (selectedWorkflowId === null) {
                    handleWorkflowSelect(workflow.id);
                  }
                }}
              >
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{workflow.name}</h3>
                    {selectedWorkflowId === workflow.id && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Selected
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {workflow.description}
                  </p>
                  {workflow.agentCount !== undefined && workflow.agentCount > 0 && (
                    <Badge variant="outline" className="text-[10px]">
                      {workflow.agentCount} agent{workflow.agentCount !== 1 ? "s" : ""}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

