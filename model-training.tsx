import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function ModelTraining() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">模型训练微调服务</h2>
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
          创建训练任务
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">进行中的任务</TabsTrigger>
          <TabsTrigger value="completed">已完成任务</TabsTrigger>
          <TabsTrigger value="templates">训练模板</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TrainingTaskCard
              name="金融风险预测模型训练"
              status="running"
              progress={65}
              startTime="2025-05-21 09:30"
              estimatedEndTime="2025-05-21 18:45"
              resourceUsage="1x RTX 4090, 8核 CPU"
              owner="当前用户"
            />
            <TrainingTaskCard
              name="股票价格预测模型微调"
              status="queued"
              progress={0}
              startTime="等待中"
              estimatedEndTime="预计 2025-05-21 20:30"
              resourceUsage="2x RTX 4090, 16核 CPU"
              owner="张教授"
            />
            <TrainingTaskCard
              name="金融文本分类模型训练"
              status="running"
              progress={32}
              startTime="2025-05-21 12:15"
              estimatedEndTime="2025-05-22 03:20"
              resourceUsage="1x RTX 4090, 8核 CPU"
              owner="李同学"
            />
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TrainingTaskCard
              name="金融舆情分析模型训练"
              status="completed"
              progress={100}
              startTime="2025-05-20 14:30"
              endTime="2025-05-20 23:45"
              resourceUsage="1x RTX 4090, 8核 CPU"
              owner="当前用户"
              metrics={{
                accuracy: "89.7%",
                loss: "0.0342",
                f1Score: "0.912",
              }}
            />
            <TrainingTaskCard
              name="投资组合优化模型训练"
              status="completed"
              progress={100}
              startTime="2025-05-19 10:15"
              endTime="2025-05-19 16:30"
              resourceUsage="1x RTX 4090, 8核 CPU"
              owner="王研究员"
              metrics={{
                accuracy: "92.3%",
                loss: "0.0287",
                f1Score: "0.935",
              }}
            />
            <TrainingTaskCard
              name="金融欺诈检测模型微调"
              status="failed"
              progress={78}
              startTime="2025-05-18 09:00"
              endTime="2025-05-18 12:45 (失败)"
              resourceUsage="1x RTX 4090, 8核 CPU"
              owner="当前用户"
              errorMessage="训练过程中内存溢出"
            />
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TrainingTemplateCard
              name="金融预测模型训练模板"
              description="用于训练金融市场预测模型的标准配置"
              framework="PyTorch"
              defaultResources="1x RTX 4090, 8核 CPU"
              estimatedTime="6-8小时"
            />
            <TrainingTemplateCard
              name="NLP金融文本分析模板"
              description="针对金融文本数据的NLP模型训练配置"
              framework="Hugging Face Transformers"
              defaultResources="1x RTX 4090, 8核 CPU"
              estimatedTime="10-12小时"
            />
            <TrainingTemplateCard
              name="大模型微调模板"
              description="针对金融领域的大型语言模型微调配置"
              framework="PyTorch + PEFT"
              defaultResources="2x RTX 4090, 16核 CPU"
              estimatedTime="24-36小时"
            />
            <TrainingTemplateCard
              name="时间序列预测模板"
              description="针对金融时间序列数据的预测模型训练配置"
              framework="TensorFlow"
              defaultResources="1x RTX 4090, 8核 CPU"
              estimatedTime="4-6小时"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>训练资源使用情况</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">活跃训练任务</div>
              <div className="mt-2 text-2xl font-bold">2 / 6</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">排队任务</div>
              <div className="mt-2 text-2xl font-bold">1</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">GPU使用率</div>
              <div className="mt-2 text-2xl font-bold">2 / 8 卡</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">本月训练时长</div>
              <div className="mt-2 text-2xl font-bold">128.5 小时</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TrainingTaskCard({
  name,
  status,
  progress,
  startTime,
  endTime,
  estimatedEndTime,
  resourceUsage,
  owner,
  metrics,
  errorMessage,
}: {
  name: string;
  status: "running" | "queued" | "completed" | "failed";
  progress: number;
  startTime: string;
  endTime?: string;
  estimatedEndTime?: string;
  resourceUsage: string;
  owner: string;
  metrics?: {
    accuracy: string;
    loss: string;
    f1Score: string;
  };
  errorMessage?: string;
}) {
  const statusColors = {
    running: "bg-blue-100 text-blue-800",
    queued: "bg-amber-100 text-amber-800",
    completed: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };

  const statusText = {
    running: "运行中",
    queued: "排队中",
    completed: "已完成",
    failed: "失败",
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
          {(status === "running" || status === "failed") && (
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>进度</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}

          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">开始时间:</span>
            <span className="col-span-2 font-medium">{startTime}</span>
          </div>

          {status === "completed" || status === "failed" ? (
            <div className="grid grid-cols-3 text-sm">
              <span className="text-muted-foreground">结束时间:</span>
              <span className="col-span-2 font-medium">{endTime}</span>
            </div>
          ) : (
            <div className="grid grid-cols-3 text-sm">
              <span className="text-muted-foreground">预计结束:</span>
              <span className="col-span-2 font-medium">{estimatedEndTime}</span>
            </div>
          )}

          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">资源配置:</span>
            <span className="col-span-2 font-medium">{resourceUsage}</span>
          </div>

          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">所有者:</span>
            <span className="col-span-2 font-medium">{owner}</span>
          </div>

          {metrics && (
            <div className="mt-3 pt-3 border-t">
              <div className="text-sm font-medium mb-2">训练指标:</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded bg-gray-100 p-2 text-center">
                  <div className="text-xs text-muted-foreground">准确率</div>
                  <div className="font-medium">{metrics.accuracy}</div>
                </div>
                <div className="rounded bg-gray-100 p-2 text-center">
                  <div className="text-xs text-muted-foreground">损失值</div>
                  <div className="font-medium">{metrics.loss}</div>
                </div>
                <div className="rounded bg-gray-100 p-2 text-center">
                  <div className="text-xs text-muted-foreground">F1分数</div>
                  <div className="font-medium">{metrics.f1Score}</div>
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mt-2 text-sm text-red-500">
              <span className="font-medium">错误:</span> {errorMessage}
            </div>
          )}

          <div className="flex space-x-2 pt-2">
            {status === "running" && (
              <>
                <Button size="sm" variant="outline">
                  查看日志
                </Button>
                <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                  停止
                </Button>
              </>
            )}
            {status === "completed" && (
              <>
                <Button size="sm">查看模型</Button>
                <Button size="sm" variant="outline">
                  查看日志
                </Button>
              </>
            )}
            {status === "failed" && (
              <>
                <Button size="sm">重试</Button>
                <Button size="sm" variant="outline">
                  查看日志
                </Button>
              </>
            )}
            {status === "queued" && (
              <>
                <Button size="sm" variant="outline">
                  修改
                </Button>
                <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                  取消
                </Button>
              </>
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

function TrainingTemplateCard({
  name,
  description,
  framework,
  defaultResources,
  estimatedTime,
}: {
  name: string;
  description: string;
  framework: string;
  defaultResources: string;
  estimatedTime: string;
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
            <span className="text-muted-foreground">预计时长:</span>
            <span className="col-span-2 font-medium">{estimatedTime}</span>
          </div>
          <Button size="sm" className="w-full mt-2">
            使用此模板
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
