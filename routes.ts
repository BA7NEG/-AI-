// 定义应用路由
export interface Route {
  path: string;
  name: string;
  icon?: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/dashboard",
    name: "仪表盘",
    icon: "layout-dashboard"
  },
  {
    path: "/compute",
    name: "算力平台",
    icon: "cpu",
    children: [
      {
        path: "/compute/instances",
        name: "开发机实例",
        icon: "server"
      },
      {
        path: "/compute/files",
        name: "文件管理",
        icon: "folder"
      },
      {
        path: "/compute/images",
        name: "镜像管理",
        icon: "box"
      },
      {
        path: "/compute/training",
        name: "模型训练微调",
        icon: "activity"
      },
      {
        path: "/compute/inference",
        name: "模型推理服务",
        icon: "zap"
      },
      {
        path: "/compute/models",
        name: "模型管理",
        icon: "database"
      }
    ]
  },
  {
    path: "/llm",
    name: "大模型服务",
    icon: "brain",
    children: [
      {
        path: "/llm/inference",
        name: "大模型推理",
        icon: "sparkles"
      },
      {
        path: "/llm/usage",
        name: "用量统计",
        icon: "bar-chart"
      }
    ]
  },
  {
    path: "/agents",
    name: "智能体平台",
    icon: "bot",
    children: [
      {
        path: "/agents/builder",
        name: "智能体搭建",
        icon: "puzzle"
      },
      {
        path: "/agents/knowledge",
        name: "知识库问答",
        icon: "book-open"
      }
    ]
  },
  {
    path: "/settings",
    name: "系统设置",
    icon: "settings"
  }
];
