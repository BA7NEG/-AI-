import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
// import { Label } from "./ui/label";

export function FileManager() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">文件管理</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            上传文件
          </Button>
          <Button>
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            新建文件夹
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>文件目录</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-1">
                  <FolderItem name="个人文件" expanded={true}>
                    <FolderItem name="项目" expanded={true}>
                      <FolderItem name="金融预测模型" />
                      <FolderItem name="风险评估" />
                    </FolderItem>
                    <FolderItem name="数据集" />
                    <FolderItem name="笔记" />
                  </FolderItem>
                  <FolderItem name="共享文件" expanded={true}>
                    <FolderItem name="教学资料" />
                    <FolderItem name="研究数据" />
                    <FolderItem name="模型库" />
                  </FolderItem>
                  <FolderItem name="系统文件" />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-9">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>个人文件 / 项目 / 金融预测模型</CardTitle>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="搜索文件..."
                    className="w-[200px]"
                  />
                  <Button variant="ghost" size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="M21 16H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
                      <path d="M6 12v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                      <path d="M5 16V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14" />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
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
                      className="h-4 w-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="12" x2="12" y1="8" y2="16" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FileCard
                  name="预测模型.ipynb"
                  type="notebook"
                  size="2.4 MB"
                  modified="今天 10:23"
                  owner="当前用户"
                />
                <FileCard
                  name="数据预处理.py"
                  type="python"
                  size="1.2 MB"
                  modified="昨天 15:45"
                  owner="当前用户"
                />
                <FileCard
                  name="模型评估报告.pdf"
                  type="pdf"
                  size="4.8 MB"
                  modified="2天前"
                  owner="张教授"
                />
                <FileCard
                  name="金融数据集.csv"
                  type="csv"
                  size="28.5 MB"
                  modified="3天前"
                  owner="系统管理员"
                />
                <FileCard
                  name="模型架构图.png"
                  type="image"
                  size="1.8 MB"
                  modified="5天前"
                  owner="当前用户"
                />
                <FileCard
                  name="研究笔记.md"
                  type="markdown"
                  size="0.5 MB"
                  modified="1周前"
                  owner="当前用户"
                />
                <FileCard
                  name="参考文献.bib"
                  type="bibtex"
                  size="0.3 MB"
                  modified="1周前"
                  owner="当前用户"
                />
                <FileCard
                  name="模型权重.pt"
                  type="pytorch"
                  size="245.7 MB"
                  modified="2周前"
                  owner="系统管理员"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>存储使用情况</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">个人存储</div>
              <div className="mt-2 text-2xl font-bold">45.8 GB / 100 GB</div>
              <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "45.8%" }}></div>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">共享存储</div>
              <div className="mt-2 text-2xl font-bold">156.2 GB / 500 GB</div>
              <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: "31.2%" }}></div>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">文件总数</div>
              <div className="mt-2 text-2xl font-bold">1,248</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">共享文件</div>
              <div className="mt-2 text-2xl font-bold">86</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FolderItem({ name, expanded = false, children }: { name: string; expanded?: boolean; children?: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
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
          {expanded ? (
            <path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z" />
          ) : (
            <path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
          )}
        </svg>
        <span className="text-sm">{name}</span>
      </div>
      {expanded && children && <div className="pl-6">{children}</div>}
    </div>
  );
}

function FileCard({
  name,
  type,
  size,
  modified,
  owner,
}: {
  name: string;
  type: string;
  size: string;
  modified: string;
  owner: string;
}) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "notebook":
        return (
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
            className="h-8 w-8 text-orange-500"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case "python":
        return (
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
            className="h-8 w-8 text-blue-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
      case "pdf":
        return (
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
            className="h-8 w-8 text-red-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
      case "csv":
        return (
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
            className="h-8 w-8 text-green-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="8" y1="13" x2="8" y2="17" />
            <line x1="16" y1="13" x2="16" y2="17" />
            <line x1="8" y1="15" x2="16" y2="15" />
          </svg>
        );
      case "image":
        return (
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
            className="h-8 w-8 text-purple-500"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        );
      default:
        return (
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
            className="h-8 w-8 text-gray-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
    }
  };

  return (
    <div className="rounded-lg border p-3 hover:shadow-md cursor-pointer">
      <div className="flex items-center space-x-3">
        {getFileIcon(type)}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-xs text-muted-foreground">{size}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
        <div>修改时间:</div>
        <div className="text-right">{modified}</div>
        <div>所有者:</div>
        <div className="text-right">{owner}</div>
      </div>
    </div>
  );
}
