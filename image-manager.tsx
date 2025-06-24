import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
// import { ScrollArea } from "./ui/scroll-area";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";

export function ImageManager() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">镜像管理</h2>
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
            导入镜像
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
            创建自定义镜像
          </Button>
        </div>
      </div>

      <Tabs defaultValue="system">
        <TabsList>
          <TabsTrigger value="system">系统镜像</TabsTrigger>
          <TabsTrigger value="custom">自定义镜像</TabsTrigger>
          <TabsTrigger value="shared">共享镜像</TabsTrigger>
        </TabsList>
        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ImageCard
              name="金融分析基础环境"
              version="v1.2.0"
              description="预装Python数据分析库和金融分析工具的Jupyter环境"
              size="4.2 GB"
              lastUpdated="2025-04-15"
              tags={["Python", "Jupyter", "金融分析"]}
              isSystem={true}
            />
            <ImageCard
              name="深度学习环境"
              version="v2.1.0"
              description="包含PyTorch、TensorFlow等深度学习框架的环境"
              size="8.7 GB"
              lastUpdated="2025-05-01"
              tags={["PyTorch", "TensorFlow", "CUDA"]}
              isSystem={true}
            />
            <ImageCard
              name="大模型推理环境"
              version="v1.0.5"
              description="针对大型语言模型推理优化的环境"
              size="12.3 GB"
              lastUpdated="2025-05-10"
              tags={["LLM", "推理", "OpenWebUI"]}
              isSystem={true}
            />
            <ImageCard
              name="金融数据可视化环境"
              version="v1.1.2"
              description="预装数据可视化工具的环境"
              size="5.8 GB"
              lastUpdated="2025-04-20"
              tags={["可视化", "Tableau", "PowerBI"]}
              isSystem={true}
            />
            <ImageCard
              name="量化交易环境"
              version="v1.3.0"
              description="包含量化交易相关库和工具的环境"
              size="6.2 GB"
              lastUpdated="2025-04-25"
              tags={["量化交易", "Backtrader", "TA-Lib"]}
              isSystem={true}
            />
          </div>
        </TabsContent>
        <TabsContent value="custom" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ImageCard
              name="金融风险预测环境"
              version="v0.3.2"
              description="自定义的金融风险预测模型开发环境"
              size="7.5 GB"
              lastUpdated="2025-05-18"
              tags={["风险预测", "自定义", "PyTorch"]}
              isSystem={false}
            />
            <ImageCard
              name="金融NLP分析环境"
              version="v0.2.1"
              description="针对金融文本分析优化的NLP环境"
              size="9.2 GB"
              lastUpdated="2025-05-15"
              tags={["NLP", "文本分析", "BERT"]}
              isSystem={false}
            />
          </div>
        </TabsContent>
        <TabsContent value="shared" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ImageCard
              name="金融教学环境"
              version="v1.0.0"
              description="金融学院教学专用环境，包含教学案例和数据集"
              size="5.6 GB"
              lastUpdated="2025-05-05"
              tags={["教学", "共享", "案例"]}
              isSystem={false}
              sharedBy="张教授"
            />
            <ImageCard
              name="研究生项目环境"
              version="v0.5.0"
              description="研究生金融建模项目专用环境"
              size="8.3 GB"
              lastUpdated="2025-05-12"
              tags={["研究", "建模", "共享"]}
              isSystem={false}
              sharedBy="王研究员"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>镜像存储统计</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">系统镜像</div>
              <div className="mt-2 text-2xl font-bold">37.2 GB</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">自定义镜像</div>
              <div className="mt-2 text-2xl font-bold">16.7 GB</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">共享镜像</div>
              <div className="mt-2 text-2xl font-bold">13.9 GB</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">镜像总数</div>
              <div className="mt-2 text-2xl font-bold">9</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ImageCard({
  name,
  version,
  description,
  size,
  lastUpdated,
  tags,
  isSystem,
  sharedBy,
}: {
  name: string;
  version: string;
  description: string;
  size: string;
  lastUpdated: string;
  tags: string[];
  isSystem: boolean;
  sharedBy?: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="text-sm text-muted-foreground">{version}</div>
          </div>
          {isSystem ? (
            <Badge className="bg-blue-100 text-blue-800">系统</Badge>
          ) : sharedBy ? (
            <Badge className="bg-purple-100 text-purple-800">共享</Badge>
          ) : (
            <Badge className="bg-green-100 text-green-800">自定义</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">大小:</span>
            <span className="col-span-2 font-medium">{size}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">更新时间:</span>
            <span className="col-span-2 font-medium">{lastUpdated}</span>
          </div>
          {sharedBy && (
            <div className="grid grid-cols-3 text-sm">
              <span className="text-muted-foreground">共享者:</span>
              <span className="col-span-2 font-medium">{sharedBy}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-2 pt-2">
            <Button size="sm">使用</Button>
            {!isSystem && (
              <Button size="sm" variant="outline">
                编辑
              </Button>
            )}
            <Button size="sm" variant="outline" className="ml-auto">
              详情
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
