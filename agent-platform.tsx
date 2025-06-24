import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function AgentPlatform() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">智能体平台</h2>
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
          创建智能体
        </Button>
      </div>

      <Tabs defaultValue="myagents">
        <TabsList>
          <TabsTrigger value="myagents">我的智能体</TabsTrigger>
          <TabsTrigger value="templates">智能体模板</TabsTrigger>
          <TabsTrigger value="builder">智能体搭建</TabsTrigger>
          <TabsTrigger value="knowledge">知识库问答</TabsTrigger>
        </TabsList>
        <TabsContent value="myagents" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AgentCard
              name="金融数据分析助手"
              description="帮助分析金融数据，生成报告和可视化图表"
              capabilities={["数据分析", "报告生成", "图表绘制"]}
              model="FinGPT-Medium"
              status="active"
              lastUsed="今天 10:23"
              creator="当前用户"
            />
            <AgentCard
              name="金融教学助手"
              description="辅助金融课程教学，回答学生问题，提供学习资料"
              capabilities={["问答", "资料推荐", "习题生成"]}
              model="FinGPT-Large"
              status="active"
              lastUsed="昨天 15:45"
              creator="张教授"
            />
            <AgentCard
              name="投资组合顾问"
              description="根据风险偏好和市场情况提供投资组合建议"
              capabilities={["风险评估", "投资建议", "市场分析"]}
              model="FinGPT-Medium"
              status="inactive"
              lastUsed="3天前"
              creator="当前用户"
            />
            <AgentCard
              name="金融文献助手"
              description="帮助查找、总结和分析金融研究文献"
              capabilities={["文献检索", "摘要生成", "引用管理"]}
              model="FinGPT-Medium"
              status="active"
              lastUsed="今天 09:15"
              creator="王研究员"
            />
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AgentTemplateCard
              name="金融数据分析模板"
              description="用于创建专注于金融数据分析的智能体"
              capabilities={["数据分析", "报告生成", "图表绘制"]}
              recommendedModel="FinGPT-Medium"
              complexity="中等"
            />
            <AgentTemplateCard
              name="金融教学模板"
              description="用于创建辅助金融教学的智能体"
              capabilities={["问答", "资料推荐", "习题生成"]}
              recommendedModel="FinGPT-Large"
              complexity="简单"
            />
            <AgentTemplateCard
              name="投资顾问模板"
              description="用于创建提供投资建议的智能体"
              capabilities={["风险评估", "投资建议", "市场分析"]}
              recommendedModel="FinGPT-Large"
              complexity="复杂"
            />
            <AgentTemplateCard
              name="研究助手模板"
              description="用于创建辅助学术研究的智能体"
              capabilities={["文献检索", "摘要生成", "引用管理"]}
              recommendedModel="FinGPT-Medium"
              complexity="中等"
            />
          </div>
        </TabsContent>
        <TabsContent value="builder" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>智能体搭建工具</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="agent-name">智能体名称</Label>
                    <Input id="agent-name" placeholder="输入智能体名称" />
                  </div>
                  <div>
                    <Label htmlFor="agent-model">选择基础模型</Label>
                    <select
                      id="agent-model"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="fingpt-medium">FinGPT-Medium</option>
                      <option value="fingpt-large">FinGPT-Large</option>
                      <option value="fingpt-xl">FinGPT-XL (受限)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="agent-description">智能体描述</Label>
                  <Textarea id="agent-description" placeholder="描述智能体的功能和用途" />
                </div>

                <div>
                  <Label>智能体能力</Label>
                  <div className="grid gap-2 md:grid-cols-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-data-analysis" className="h-4 w-4" />
                      <label htmlFor="cap-data-analysis" className="text-sm">数据分析</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-report" className="h-4 w-4" />
                      <label htmlFor="cap-report" className="text-sm">报告生成</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-chart" className="h-4 w-4" />
                      <label htmlFor="cap-chart" className="text-sm">图表绘制</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-qa" className="h-4 w-4" />
                      <label htmlFor="cap-qa" className="text-sm">问答</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-recommend" className="h-4 w-4" />
                      <label htmlFor="cap-recommend" className="text-sm">资料推荐</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cap-market" className="h-4 w-4" />
                      <label htmlFor="cap-market" className="text-sm">市场分析</label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="agent-instructions">智能体指令</Label>
                  <Textarea
                    id="agent-instructions"
                    placeholder="输入详细的智能体指令，定义其行为和回答方式"
                    className="min-h-[150px]"
                  />
                </div>

                <div>
                  <Label>知识库连接</Label>
                  <div className="grid gap-2 md:grid-cols-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kb-finance-textbooks" className="h-4 w-4" />
                      <label htmlFor="kb-finance-textbooks" className="text-sm">金融教材库</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kb-market-data" className="h-4 w-4" />
                      <label htmlFor="kb-market-data" className="text-sm">市场数据库</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kb-research-papers" className="h-4 w-4" />
                      <label htmlFor="kb-research-papers" className="text-sm">研究论文库</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kb-regulations" className="h-4 w-4" />
                      <label htmlFor="kb-regulations" className="text-sm">金融法规库</label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">保存为草稿</Button>
                  <Button>创建智能体</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="knowledge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>知识库问答智能体</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="kb-select">选择知识库</Label>
                    <select
                      id="kb-select"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="finance-textbooks">金融教材库</option>
                      <option value="market-data">市场数据库</option>
                      <option value="research-papers">研究论文库</option>
                      <option value="regulations">金融法规库</option>
                      <option value="custom">自定义知识库</option>
                    </select>
                  </div>
                  <div className="flex items-end space-x-2">
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
                      上传文档
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
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M20.4 14.5 16 10 4 20" />
                      </svg>
                      OCR识别
                    </Button>
                  </div>
                </div>

                <div className="border rounded-md p-4 min-h-[300px] bg-muted/20">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm">请解释金融衍生品的基本概念和主要类型。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm">
                          <strong>金融衍生品的基本概念和主要类型：</strong>
                        </p>
                        <p className="text-sm mt-2">
                          金融衍生品是指其价值依赖于基础资产或指数的金融合约。这些工具最初设计用于管理风险，但现在也广泛用于投机和套利。
                        </p>
                        <p className="text-sm mt-2">
                          <strong>主要类型包括：</strong>
                        </p>
                        <ol className="list-decimal list-inside text-sm mt-1 space-y-1">
                          <li>
                            <strong>期货合约：</strong>在未来特定日期以预定价格买卖标的资产的标准化合约。
                          </li>
                          <li>
                            <strong>远期合约：</strong>类似于期货，但是非标准化，通常在场外交易。
                          </li>
                          <li>
                            <strong>期权：</strong>赋予持有人在特定日期或之前以特定价格买入（看涨期权）或卖出（看跌期权）标的资产的权利，但没有义务。
                          </li>
                          <li>
                            <strong>掉期：</strong>交换现金流的协议，如利率掉期、货币掉期等。
                          </li>
                          <li>
                            <strong>结构性产品：</strong>结合多种衍生品创造的复杂金融工具。
                          </li>
                        </ol>
                        <p className="text-sm mt-2">
                          这些工具在金融市场中扮演重要角色，帮助机构和个人管理风险、提高市场效率和发现价格。
                        </p>
                        <p className="text-sm mt-2 text-muted-foreground">
                          来源：金融教材库 - 《金融市场与机构》第8章
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Input placeholder="输入您的问题..." className="flex-1" />
      
(Content truncated due to size limit. Use line ranges to read in chunks)