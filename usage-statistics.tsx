import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { Badge } from "./ui/badge";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";

export function UsageStatistics() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">用量统计</h2>
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
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h10" />
            </svg>
            导出报告
          </Button>
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
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            下载数据
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">计算资源使用</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 小时</div>
            <p className="text-xs text-muted-foreground">较上月增长 12%</p>
            <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">本月配额使用: 65%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">存储空间使用</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">458.6 GB</div>
            <p className="text-xs text-muted-foreground">较上月增长 8%</p>
            <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full rounded-full" style={{ width: "42%" }}></div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">本月配额使用: 42%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">模型调用次数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,892</div>
            <p className="text-xs text-muted-foreground">较上月增长 35%</p>
            <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full rounded-full" style={{ width: "78%" }}></div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">本月配额使用: 78%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">活跃用户数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">较上月增长 15%</p>
            <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">本月目标达成: 85%</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="compute">
        <TabsList>
          <TabsTrigger value="compute">计算资源</TabsTrigger>
          <TabsTrigger value="storage">存储资源</TabsTrigger>
          <TabsTrigger value="models">模型使用</TabsTrigger>
          <TabsTrigger value="users">用户活动</TabsTrigger>
        </TabsList>
        <TabsContent value="compute" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>计算资源使用趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                <div className="text-center">
                  <p className="text-muted-foreground">计算资源使用趋势图表</p>
                  <p className="text-xs text-muted-foreground">显示CPU、GPU、内存使用的时间序列图表</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>资源使用明细</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CPU使用</span>
                      <span className="font-medium">785 核心小时</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>GPU使用</span>
                      <span className="font-medium">460 卡时</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>内存使用</span>
                      <span className="font-medium">2,450 GB小时</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>资源分配</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-md">
                  <div className="text-center">
                    <p className="text-muted-foreground">资源分配饼图</p>
                    <p className="text-xs text-muted-foreground">按用户组/部门显示资源分配比例</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>存储使用趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                <div className="text-center">
                  <p className="text-muted-foreground">存储使用趋势图表</p>
                  <p className="text-xs text-muted-foreground">显示存储空间使用的时间序列图表</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>存储类型分布</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>数据集</span>
                      <span className="font-medium">215.3 GB</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "47%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>模型文件</span>
                      <span className="font-medium">156.8 GB</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: "34%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>用户文件</span>
                      <span className="font-medium">86.5 GB</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: "19%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>文件类型分布</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-md">
                  <div className="text-center">
                    <p className="text-muted-foreground">文件类型分布饼图</p>
                    <p className="text-xs text-muted-foreground">按文件类型显示存储空间分布</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>模型调用趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                <div className="text-center">
                  <p className="text-muted-foreground">模型调用趋势图表</p>
                  <p className="text-xs text-muted-foreground">显示模型调用次数的时间序列图表</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>热门模型排行</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>FinGPT-Medium</span>
                      <span className="font-medium">8,456 次</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>股票价格预测模型</span>
                      <span className="font-medium">6,234 次</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>金融风险评估模型</span>
                      <span className="font-medium">5,128 次</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: "51%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CodeAssist-Finance</span>
                      <span className="font-medium">3,245 次</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: "32%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>模型性能指标</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>平均响应时间</span>
                      <span className="font-medium">1.2 秒</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>成功率</span>
                      <span className="font-medium">99.2%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: "99%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>平均Token数</span>
                      <span className="font-medium">512</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: "51%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>用户活动趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
                <div className="text-center">
                  <p className="text-muted-foreground">用户活动趋势图表</p>
                  <p className="text-xs text-muted-foreground">显示活跃用户数的时间序列图表</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>用户组分布</CardTitle>
              </CardHeader>
              <C
(Content truncated due to size limit. Use line ranges to read in chunks)