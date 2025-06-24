import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function ModelInference() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">模型推理服务</h2>
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
          部署新服务
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">活跃服务</TabsTrigger>
          <TabsTrigger value="all">所有服务</TabsTrigger>
          <TabsTrigger value="templates">服务模板</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InferenceServiceCard
              name="金融风险评估模型"
              status="running"
              model="FinRisk-v2.3"
              endpoint="/api/inference/finrisk"
              deployTime="2025-05-15 09:30"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="1,245"
              avgResponseTime="120ms"
              owner="张教授"
            />
            <InferenceServiceCard
              name="股票价格预测服务"
              status="running"
              model="StockPredictor-v1.5"
              endpoint="/api/inference/stockpred"
              deployTime="2025-05-18 14:20"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="2,876"
              avgResponseTime="85ms"
              owner="当前用户"
            />
            <InferenceServiceCard
              name="金融文本分析服务"
              status="running"
              model="FinBERT-v2.0"
              endpoint="/api/inference/fintext"
              deployTime="2025-05-20 10:15"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="956"
              avgResponseTime="210ms"
              owner="王研究员"
            />
          </div>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InferenceServiceCard
              name="金融风险评估模型"
              status="running"
              model="FinRisk-v2.3"
              endpoint="/api/inference/finrisk"
              deployTime="2025-05-15 09:30"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="1,245"
              avgResponseTime="120ms"
              owner="张教授"
            />
            <InferenceServiceCard
              name="股票价格预测服务"
              status="running"
              model="StockPredictor-v1.5"
              endpoint="/api/inference/stockpred"
              deployTime="2025-05-18 14:20"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="2,876"
              avgResponseTime="85ms"
              owner="当前用户"
            />
            <InferenceServiceCard
              name="金融文本分析服务"
              status="running"
              model="FinBERT-v2.0"
              endpoint="/api/inference/fintext"
              deployTime="2025-05-20 10:15"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="956"
              avgResponseTime="210ms"
              owner="王研究员"
            />
            <InferenceServiceCard
              name="投资组合优化服务"
              status="stopped"
              model="PortOpt-v1.2"
              endpoint="/api/inference/portopt"
              deployTime="2025-05-10 11:30"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="0"
              avgResponseTime="--"
              owner="李同学"
            />
            <InferenceServiceCard
              name="金融欺诈检测服务"
              status="stopped"
              model="FraudDetect-v2.1"
              endpoint="/api/inference/frauddetect"
              deployTime="2025-05-05 16:45"
              resourceUsage="1x RTX 4090, 4核 CPU"
              requestsPerDay="0"
              avgResponseTime="--"
              owner="系统管理员"
            />
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ServiceTemplateCard
              name="金融预测服务模板"
              description="用于部署金融预测模型的标准配置"
              framework="TorchServe"
              defaultResources="1x RTX 4090, 4核 CPU"
              scalingOptions="自动扩缩容"
            />
            <ServiceTemplateCard
              name="NLP分析服务模板"
              description="针对金融文本分析的NLP模型部署配置"
              framework="Hugging Face Inference API"
              defaultResources="1x RTX 4090, 4核 CPU"
              scalingOptions="固定资源"
            />
            <ServiceTemplateCard
              name="高性能推理服务模板"
              description="针对高并发场景优化的推理服务配置"
              framework="NVIDIA Triton"
              defaultResources="2x RTX 4090, 8核 CPU"
              scalingOptions="自动扩缩容"
            />
            <ServiceTemplateCard
              name="轻量级推理服务模板"
              description="针对小型模型的轻量级部署配置"
              framework="ONNX Runtime"
              defaultResources="4核 CPU"
              scalingOptions="固定资源"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>推理服务测试</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="service">选择服务</Label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="finrisk">金融风险评估模型</option>
                  <option value="stockpred">股票价格预测服务</option>
                  <option value="fintext">金融文本分析服务</option>
                </select>
              </div>
              <div>
                <Label htmlFor="endpoint">API端点</Label>
                <Input id="endpoint" value="/api/inference/finrisk" readOnly />
              </div>
            </div>
            <div>
              <Label htmlFor="input">输入数据 (JSON格式)</Label>
              <textarea
                id="input"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder='{"company_data": {"debt_ratio": 0.45, "current_ratio": 1.2, "profit_margin": 0.08, "revenue_growth": 0.12, "market_cap": 5000000000}}'
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button>发送请求</Button>
            </div>
            <div>
              <Label htmlFor="output">响应结果</Label>
              <textarea
                id="output"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                readOnly
                value='{"risk_score": 0.35, "risk_level": "中等", "confidence": 0.92, "recommendations": ["增加流动资产", "减少短期负债", "考虑多元化投资策略"], "processing_time": "118ms"}'
              ></textarea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InferenceServiceCard({
  name,
  status,
  model,
  endpoint,
  deployTime,
  resourceUsage,
  requestsPerDay,
  avgResponseTime,
  owner,
}: {
  name: string;
  status: "running" | "stopped" | "error";
  model: string;
  endpoint: string;
  deployTime: string;
  resourceUsage: string;
  requestsPerDay: string;
  avgResponseTime: string;
  owner: string;
}) {
  const statusColors = {
    running: "bg-green-100 text-green-800",
    stopped: "bg-gray-100 text-gray-800",
    error: "bg-red-100 text-red-800",
  };

  const statusText = {
    running: "运行中",
    stopped: "已停止",
    error: "错误",
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge className={statusColors[status]}>{statusText[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">模型:</span>
            <span className="col-span-2 font-medium">{model}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">API端点:</span>
            <span className="col-span-2 font-medium text-blue-600">{endpoint}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">部署时间:</span>
            <span className="col-span-2 font-medium">{deployTime}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">资源配置:</span>
            <span className="col-span-2 font-medium">{resourceUsage}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">日请求量:</span>
            <span className="col-span-2 font-medium">{requestsPerDay}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">平均响应:</span>
            <span className="col-span-2 font-medium">{avgResponseTime}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">所有者:</span>
            <span className="col-span-2 font-medium">{owner}</span>
          </div>

          <div className="flex space-x-2 pt-2">
            {status === "running" ? (
              <>
                <Button size="sm">测试</Button>
                <Button size="sm" variant="outline">
                  停止
                </Button>
              </>
            ) : (
              <Button size="sm">启动</Button>
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

function ServiceTemplateCard({
  name,
  description,
  framework,
  defaultResources,
  scalingOptions,
}: {
  name: string;
  description: string;
  framework: string;
  defaultResources: string;
  scalingOptions: string;
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
            <span className="text-muted-foreground">框架:</span>
            <span className="col-span-2 font-medium">{framework}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">默认资源:</span>
            <span className="col-span-2 font-medium">{defaultResources}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">扩缩容:</span>
            <span className="col-span-2 font-medium">{scalingOptions}</span>
          </div>
          <Button size="sm" className="w-full mt-2">
            使用此模板
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
