import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
// import { ScrollArea } from "./ui/scroll-area";

export function ComputeInstances() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">开发机实例</h2>
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
          创建实例
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">活跃实例</TabsTrigger>
          <TabsTrigger value="all">所有实例</TabsTrigger>
          <TabsTrigger value="templates">实例模板</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InstanceCard
              name="GPU-Finance-01"
              status="running"
              type="GPU实例"
              specs="4核 CPU, 1x RTX 4090, 32GB 内存"
              uptime="2天3小时"
              owner="张教授"
            />
            <InstanceCard
              name="CPU-Analysis-05"
              status="running"
              type="CPU实例"
              specs="8核 CPU, 16GB 内存"
              uptime="5小时23分钟"
              owner="李同学"
            />
            <InstanceCard
              name="GPU-Training-02"
              status="running"
              type="GPU实例"
              specs="8核 CPU, 2x RTX 4090, 64GB 内存"
              uptime="1天7小时"
              owner="王研究员"
            />
            <InstanceCard
              name="Jupyter-Finance-03"
              status="running"
              type="Jupyter实例"
              specs="4核 CPU, 16GB 内存"
              uptime="12小时45分钟"
              owner="赵同学"
            />
          </div>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InstanceCard
              name="GPU-Finance-01"
              status="running"
              type="GPU实例"
              specs="4核 CPU, 1x RTX 4090, 32GB 内存"
              uptime="2天3小时"
              owner="张教授"
            />
            <InstanceCard
              name="CPU-Analysis-05"
              status="running"
              type="CPU实例"
              specs="8核 CPU, 16GB 内存"
              uptime="5小时23分钟"
              owner="李同学"
            />
            <InstanceCard
              name="GPU-Training-02"
              status="running"
              type="GPU实例"
              specs="8核 CPU, 2x RTX 4090, 64GB 内存"
              uptime="1天7小时"
              owner="王研究员"
            />
            <InstanceCard
              name="Jupyter-Finance-03"
              status="running"
              type="Jupyter实例"
              specs="4核 CPU, 16GB 内存"
              uptime="12小时45分钟"
              owner="赵同学"
            />
            <InstanceCard
              name="GPU-Research-07"
              status="stopped"
              type="GPU实例"
              specs="8核 CPU, 1x RTX 4090, 32GB 内存"
              uptime="--"
              owner="刘教授"
            />
            <InstanceCard
              name="OpenWebUI-Demo-01"
              status="stopped"
              type="WebUI实例"
              specs="4核 CPU, 16GB 内存"
              uptime="--"
              owner="系统管理员"
            />
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TemplateCard
              name="金融分析基础环境"
              description="预装Python数据分析库和金融分析工具的Jupyter环境"
              specs="4核 CPU, 16GB 内存"
              apps={["Jupyter", "VSCode"]}
            />
            <TemplateCard
              name="金融模型训练环境"
              description="高性能GPU环境，适用于金融模型训练和深度学习"
              specs="8核 CPU, 1x RTX 4090, 32GB 内存"
              apps={["PyTorch", "TensorFlow", "Jupyter"]}
            />
            <TemplateCard
              name="大模型推理环境"
              description="针对大型语言模型推理优化的环境"
              specs="8核 CPU, 1x RTX 4090, 64GB 内存"
              apps={["OpenWebUI", "LangChain"]}
            />
            <TemplateCard
              name="金融数据可视化环境"
              description="预装数据可视化工具的环境"
              specs="4核 CPU, 16GB 内存"
              apps={["Tableau", "PowerBI", "Jupyter"]}
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>资源使用情况</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">活跃实例</div>
              <div className="mt-2 text-2xl font-bold">4 / 10</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">已分配 CPU</div>
              <div className="mt-2 text-2xl font-bold">24 / 64 核</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">已分配 GPU</div>
              <div className="mt-2 text-2xl font-bold">4 / 8 卡</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">已分配内存</div>
              <div className="mt-2 text-2xl font-bold">144 / 256 GB</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InstanceCard({
  name,
  status,
  type,
  specs,
  uptime,
  owner,
}: {
  name: string;
  status: "running" | "stopped" | "error";
  type: string;
  specs: string;
  uptime: string;
  owner: string;
}) {
  const statusColors = {
    running: "bg-green-100 text-green-800",
    stopped: "bg-gray-100 text-gray-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge className={statusColors[status]}>
            {status === "running" ? "运行中" : status === "stopped" ? "已停止" : "错误"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">类型:</span>
            <span className="col-span-2 font-medium">{type}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">配置:</span>
            <span className="col-span-2 font-medium">{specs}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">运行时间:</span>
            <span className="col-span-2 font-medium">{uptime}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">所有者:</span>
            <span className="col-span-2 font-medium">{owner}</span>
          </div>
          <div className="flex space-x-2 pt-2">
            {status === "running" ? (
              <>
                <Button size="sm" variant="outline">
                  连接
                </Button>
                <Button size="sm" variant="outline">
                  停止
                </Button>
              </>
            ) : (
              <Button size="sm">启动</Button>
            )}
            <Button size="sm" variant="outline" className="ml-auto">
              更多
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TemplateCard({
  name,
  description,
  specs,
  apps,
}: {
  name: string;
  description: string;
  specs: string;
  apps: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">配置:</span>
            <span className="col-span-2 font-medium">{specs}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">预装应用:</span>
            <div className="col-span-2">
              {apps.map((app) => (
                <Badge key={app} variant="outline" className="mr-1 mb-1">
                  {app}
                </Badge>
              ))}
            </div>
          </div>
          <Button size="sm" className="w-full mt-2">
            使用此模板创建
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
