import { useQuery } from "@tanstack/react-query";
import * as workflowsApi from "@/services/api/workflows";

export const workflowKeys = {
  all: ["workflows"] as const,
  ootb: (projectName?: string) => [...workflowKeys.all, "ootb", projectName] as const,
  metadata: (projectName: string, sessionName: string) =>
    [...workflowKeys.all, "metadata", projectName, sessionName] as const,
};

export function useOOTBWorkflows(projectName?: string) {
  return useQuery({
    queryKey: workflowKeys.ootb(projectName),
    queryFn: async () => {
      const workflows = await workflowsApi.listOOTBWorkflows(projectName);
      // Filter out the Template workflow from the default workflows
      // Check both name and id fields, case-insensitive
      // Also check for common variations like "Template", "template-workflow", etc.
      return workflows.filter((workflow) => {
        const nameLower = (workflow.name || "").toLowerCase().trim();
        const idLower = (workflow.id || "").toLowerCase().trim();
        
        // Filter out anything containing "template" in name or id
        const isTemplate = nameLower.includes("template") || idLower.includes("template");
        
        return !isTemplate;
      });
    },
    enabled: !!projectName, // Only fetch when projectName is available
    staleTime: 5 * 60 * 1000, // 5 minutes - workflows don't change often
  });
}

export function useWorkflowMetadata(
  projectName: string,
  sessionName: string,
  enabled: boolean
) {
  return useQuery({
    queryKey: workflowKeys.metadata(projectName, sessionName),
    queryFn: () => workflowsApi.getWorkflowMetadata(projectName, sessionName),
    enabled: enabled && !!projectName && !!sessionName,
    staleTime: 60 * 1000, // 1 minute
  });
}

