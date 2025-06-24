import { useState } from "react";
import { LoginForm } from "./components/login-form";
import { DashboardOverview } from "./components/dashboard-overview";
import { ComputeInstances } from "./components/compute-instances";
import { FileManager } from "./components/file-manager";
import { ImageManager } from "./components/image-manager";
import { ModelTraining } from "./components/model-training";
import { ModelInference } from "./components/model-inference";
import { ModelManagement } from "./components/model-management";
import { LLMService } from "./components/llm-service";
import { UsageStatistics } from "./components/usage-statistics";
import { AgentPlatform } from "./components/agent-platform";
import { useAuth } from "./lib/auth";
import { routes } from "./lib/routes";

function App() {
  const { isAuthenticated, user } = useAuth();
  const [activeRoute, setActiveRoute] = useState("/dashboard");

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <LoginForm />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeRoute) {
      case "/dashboard":
        return <DashboardOverview />;
      case "/compute/instances":
        return <ComputeInstances />;
      case "/compute/files":
        return <FileManager />;
      case "/compute/images":
        return <ImageManager />;
      case "/compute/training":
        return <ModelTraining />;
      case "/compute/inference":
        return <ModelInference />;
      case "/compute/models":
        return <ModelManagement />;
      case "/llm/inference":
        return <LLMService />;
      case "/llm/usage":
        return <UsageStatistics />;
      case "/agents/builder":
      case "/agents/knowledge":
        return <AgentPlatform />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">AI算力管理平台</h1>
          <p className="text-sm text-muted-foreground">深圳大学金融学院</p>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          <nav className="space-y-1 px-2">
            {routes.map((route) => (
              <div key={route.path}>
                <button
                  onClick={() => setActiveRoute(route.path)}
                  className={`flex items-center w-full px-2 py-2 text-sm rounded-md ${
                    activeRoute === route.path
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {route.icon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      {route.icon === "layout-dashboard" && (
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                      )}
                      {route.icon === "cpu" && (
                        <>
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <path d="M15 2v2" />
                          <path d="M15 20v2" />
                          <path d="M2 15h2" />
                          <path d="M20 15h2" />
                          <path d="M9 2v2" />
                          <path d="M9 20v2" />
                          <path d="M2 9h2" />
                          <path d="M20 9h2" />
                        </>
                      )}
                      {route.icon === "brain" && (
                        <>
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
                        </>
                      )}
                      {route.icon === "bot" && (
                        <>
                          <path d="M12 8V4H8" />
                          <rect width="16" height="12" x="4" y="8" rx="2" />
                          <path d="M2 14h2" />
                          <path d="M20 14h2" />
                          <path d="M15 13v2" />
                          <path d="M9 13v2" />
                        </>
                      )}
                      {route.icon === "settings" && (
                        <>
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  )}
                  {route.name}
                </button>
                {route.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {route.children.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => setActiveRoute(child.path)}
                        className={`flex items-center w-full px-2 py-2 text-sm rounded-md ${
                          activeRoute === child.path
                            ? "bg-gray-100 text-gray-900 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {child.icon && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            {child.icon === "server" && (
                              <>
                                <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                                <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                                <line x1="6" x2="6" y1="6" y2="6" />
                                <line x1="6" x2="6" y1="18" y2="18" />
                              </>
                            )}
                            {child.icon === "folder" && (
                              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                            )}
                            {child.icon === "box" && (
                              <>
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                <path d="m3.3 7 8.7 5 8.7-5" />
                                <path d="M12 22V12" />
                              </>
                            )}
                            {child.icon === "activity" && (
                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            )}
                            {child.icon === "zap" && (
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            )}
                            {child.icon === "database" && (
                              <>
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                              </>
                            )}
                            {child.icon === "sparkles" && (
                              <>
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                <path d="M5 3v4" />
                                <path d="M19 17v4" />
                                <path d="M3 5h4" />
                                <path d="M17 19h4" />
                              </>
                            )}
                            {child.icon === "bar-chart" && (
                              <>
                                <line x1="12" x2="12" y1="20" y2="10" />
                                <line x1="18" x2="18" y1="20" y2="4" />
                                <line x1="6" x2="6" y1="20" y2="16" />
                              </>
                            )}
                            {child.icon === "puzzle" && (
                              <>
                                <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.235-1.873a1.95 1.95 0 0 0-1.929-2.2l-1.974.04a.992.992 0 0 1-.921-.757c-.077-.47.232-.904.706-.98l1.887-.235a1.95 1.95 0 0 0 1.66-2.2l-.331-1.974a.98.98 0 0 1 .257-.837c.47-.47 1.087-.706 1.704-.706s1.233.235 1.704.706l1.568 1.568c.23.23.556.338.878.29z" />
                                <path d="M6.095 14.407c.313.1.647.05.878-.181l1.568-1.568c.47-.47 1.087-.706 1.704-.706s1.233.235 1.704.706l1.611 1.611a.98.98 0 0 1 .276.837c-.07.47-.48.802-.95.743l-1.873-.235a1.95 1.95 0 0 0-2.2 1.929l.04 1.974a.992.992 0 0 1-.757.921c-.47.077-.904-.232-.98-.706l-.235-1.887a1.95 1.95 0 0 0-2.2-1.66L2.807 16.6a.98.98 0 0 1-.837-.257c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.568-1.568c.23-.23.338-.556.29-.878" />
                              </>
                            )}
                            {child.icon === "book-open" && (
                              <>
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </>
                            )}
                          </svg>
                        )}
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium">{user?.name?.charAt(0)}</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground">
                {user?.role === "admin"
                  ? "管理员"
                  : user?.role === "teacher"
                  ? "教师"
                  : "学生"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center md:hidden">
            <button className="p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <h1 className="text-xl font-bold ml-2">AI算力管理平台</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
     
(Content truncated due to size limit. Use line ranges to read in chunks)