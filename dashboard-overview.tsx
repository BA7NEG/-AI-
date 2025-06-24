import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

export function DashboardOverview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>资源使用概览</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">总览</TabsTrigger>
              <TabsTrigger value="compute">算力资源</TabsTrigger>
              <TabsTrigger value="storage">存储资源</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ResourceCard title="CPU使用率" value="45%" color="blue" />
                <ResourceCard title="GPU使用率" value="78%" color="purple" />
                <ResourceCard title="内存使用率" value="62%" color="green" />
                <ResourceCard title="存储使用率" value="37%" color="amber" />
              </div>
            </TabsContent>
            <TabsContent value="compute" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <ResourceCard title="CPU核心总数" value="128" color="blue" />
                <ResourceCard title="GPU总数" value="16" color="purple" />
                <ResourceCard title="活跃实例" value="12" color="green" />
                <ResourceCard title="排队任务" value="3" color="amber" />
              </div>
            </TabsContent>
            <TabsContent value="storage" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <ResourceCard title="总存储容量" value="24 TB" color="blue" />
                <ResourceCard title="已用存储" value="8.9 TB" color="purple" />
                <ResourceCard title="文件总数" value="12,458" color="green" />
                <ResourceCard title="模型存储" value="5.2 TB" color="amber" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>快速操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Button className="w-full justify-start">
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
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
              创建开发机实例
            </Button>
            <Button className="w-full justify-start" variant="outline">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              上传文件
            </Button>
            <Button className="w-full justify-start" variant="outline">
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
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 15v4a2 2 0 0 0 2 2h16v-6" />
                <path d="M16 16h-7a2 2 0 0 1 0-4h7" />
              </svg>
              启动模型训练
            </Button>
            <Button className="w-full justify-start" variant="outline">
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
                <circle cx="12" cy="12" r="10" />
                <path d="m16 12-4-4-4 4" />
                <path d="M12 16V8" />
              </svg>
              部署推理服务
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>最近活动</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ActivityItem
              title="模型训练完成"
              description="金融预测模型 v2.3 训练已完成，准确率 89.7%"
              time="10分钟前"
              icon={
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
            />
            <ActivityItem
              title="新文件上传"
              description="用户 张教授 上传了 5 个新文件到 /datasets/financial_data/"
              time="30分钟前"
              icon={
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              }
            />
            <ActivityItem
              title="实例创建"
              description="用户 李同学 创建了新的开发机实例 GPU-8GB-01"
              time="1小时前"
              icon={
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              }
            />
            <ActivityItem
              title="推理服务部署"
              description="金融风险评估模型已成功部署为推理服务"
              time="3小时前"
              icon={
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
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 15v4a2 2 0 0 0 2 2h16v-6" />
                  <path d="M16 16h-7a2 2 0 0 1 0-4h7" />
                </svg>
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>系统状态</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">系统负载</div>
                <div>65%</div>
              </div>
              <Progress value={65} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">网络带宽</div>
                <div>42%</div>
              </div>
              <Progress value={42} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">服务健康度</div>
                <div>98%</div>
              </div>
              <Progress value={98} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">API响应时间</div>
                <div>良好</div>
              </div>
              <Progress value={85} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ResourceCard({ title, value, color }: { title: string; value: string; color: string }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="rounded-lg border p-3">
      <div className="text-sm font-medium">{title}</div>
      <div className={`mt-2 rounded-md px-2 py-1 text-xl font-bold ${selectedColor}`}>{value}</div>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
  icon,
}: {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start space-x-4 rounded-lg border p-3">
      <div className="rounded-full bg-primary/10 p-2">{icon}</div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}
