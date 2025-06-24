import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
// import { Label } from "./ui/label";

export function ModelManagement() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">模型管理</h2>
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
            导入模型
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
            注册模型
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">所有模型</TabsTrigger>
          <TabsTrigger value="my">我的模型</TabsTrigger>
          <TabsTrigger value="shared">共享模型</TabsTrigger>
          <TabsTrigger value="system">系统模型</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Input placeholder="搜索模型..." className="max-w-sm" />
            <Button variant="outline" size="icon">
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ModelCard
              name="金融风险评估模型"
              version="v2.3"
              type="分类模型"
              framework="PyTorch"
              accuracy="89.7%"
              size="245 MB"
              lastUpdated="2025-05-15"
              owner="张教授"
              isDeployed={true}
              tags={["风险评估", "金融", "分类"]}
            />
            <ModelCard
              name="股票价格预测模型"
              version="v1.5"
              type="回归模型"
              framework="TensorFlow"
              accuracy="RMSE: 0.0342"
              size="178 MB"
              lastUpdated="2025-05-18"
              owner="当前用户"
              isDeployed={true}
              tags={["股票", "预测", "时间序列"]}
            />
            <ModelCard
              name="金融文本分析模型"
              version="v2.0"
              type="NLP模型"
              framework="Hugging Face"
              accuracy="92.3%"
              size="1.2 GB"
              lastUpdated="2025-05-20"
              owner="王研究员"
              isDeployed={true}
              tags={["NLP", "文本分析", "情感分析"]}
            />
            <ModelCard
              name="投资组合优化模型"
              version="v1.2"
              type="优化模型"
              framework="PyTorch"
              accuracy="Sharpe: 1.45"
              size="156 MB"
              lastUpdated="2025-05-10"
              owner="李同学"
              isDeployed={false}
              tags={["投资组合", "优化", "风险管理"]}
            />
            <ModelCard
              name="金融欺诈检测模型"
              version="v2.1"
              type="异常检测模型"
              framework="XGBoost"
              accuracy="95.8%"
              size="87 MB"
              lastUpdated="2025-05-05"
              owner="系统管理员"
              isDeployed={false}
              tags={["欺诈检测", "异常检测", "安全"]}
            />
            <ModelCard
              name="金融舆情分析模型"
              version="v1.0"
              type="NLP模型"
              framework="Hugging Face"
              accuracy="88.5%"
              size="950 MB"
              lastUpdated="2025-05-20"
              owner="当前用户"
              isDeployed={false}
              tags={["舆情分析", "NLP", "金融新闻"]}
            />
          </div>
        </TabsContent>
        <TabsContent value="my" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ModelCard
              name="股票价格预测模型"
              version="v1.5"
              type="回归模型"
              framework="TensorFlow"
              accuracy="RMSE: 0.0342"
              size="178 MB"
              lastUpdated="2025-05-18"
              owner="当前用户"
              isDeployed={true}
              tags={["股票", "预测", "时间序列"]}
            />
            <ModelCard
              name="金融舆情分析模型"
              version="v1.0"
              type="NLP模型"
              framework="Hugging Face"
              accuracy="88.5%"
              size="950 MB"
              lastUpdated="2025-05-20"
              owner="当前用户"
              isDeployed={false}
              tags={["舆情分析", "NLP", "金融新闻"]}
            />
          </div>
        </TabsContent>
        <TabsContent value="shared" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ModelCard
              name="金融风险评估模型"
              version="v2.3"
              type="分类模型"
              framework="PyTorch"
              accuracy="89.7%"
              size="245 MB"
              lastUpdated="2025-05-15"
              owner="张教授"
              isDeployed={true}
              tags={["风险评估", "金融", "分类"]}
            />
            <ModelCard
              name="金融文本分析模型"
              version="v2.0"
              type="NLP模型"
              framework="Hugging Face"
              accuracy="92.3%"
              size="1.2 GB"
              lastUpdated="2025-05-20"
              owner="王研究员"
              isDeployed={true}
              tags={["NLP", "文本分析", "情感分析"]}
            />
            <ModelCard
              name="投资组合优化模型"
              version="v1.2"
              type="优化模型"
              framework="PyTorch"
              accuracy="Sharpe: 1.45"
              size="156 MB"
              lastUpdated="2025-05-10"
              owner="李同学"
              isDeployed={false}
              tags={["投资组合", "优化", "风险管理"]}
            />
          </div>
        </TabsContent>
        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ModelCard
              name="金融欺诈检测模型"
              version="v2.1"
              type="异常检测模型"
              framework="XGBoost"
              accuracy="95.8%"
              size="87 MB"
              lastUpdated="2025-05-05"
              owner="系统管理员"
              isDeployed={false}
              tags={["欺诈检测", "异常检测", "安全"]}
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>模型存储统计</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">模型总数</div>
              <div className="mt-2 text-2xl font-bold">6</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">已部署模型</div>
              <div className="mt-2 text-2xl font-bold">3</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">模型存储空间</div>
              <div className="mt-2 text-2xl font-bold">2.8 GB</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">共享模型</div>
              <div className="mt-2 text-2xl font-bold">3</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ModelCard({
  name,
  version,
  type,
  framework,
  accuracy,
  size,
  lastUpdated,
  owner,
  isDeployed,
  tags,
}: {
  name: string;
  version: string;
  type: string;
  framework: string;
  accuracy: string;
  size: string;
  lastUpdated: string;
  owner: string;
  isDeployed: boolean;
  tags: string[];
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="text-sm text-muted-foreground">{version}</div>
          </div>
          {isDeployed ? (
            <Badge className="bg-green-100 text-green-800">已部署</Badge>
          ) : (
            <Badge variant="outline">未部署</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">类型:</span>
            <span className="col-span-2 font-medium">{type}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">框架:</span>
            <span className="col-span-2 font-medium">{framework}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">准确率:</span>
            <span className="col-span-2 font-medium">{accuracy}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">大小:</span>
            <span className="col-span-2 font-medium">{size}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">更新时间:</span>
            <span className="col-span-2 font-medium">{lastUpdated}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">所有者:</span>
            <span className="col-span-2 font-medium">{owner}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-2 pt-2">
            {isDeployed ? (
              <Button size="sm" variant="outline">
                查看服务
              </Button>
            ) : (
              <Button size="sm">部署</Button>
            )}
            <Button size="sm" variant="outline">
              版本历史
            </Button>
            <Button size="sm" variant="outline" className="ml-auto">
              详情
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
