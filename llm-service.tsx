import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
// import { Progress } from "./ui/progress";

export function LLMService() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">大模型推理服务</h2>
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
          申请新服务
        </Button>
      </div>

      <Tabs defaultValue="models">
        <TabsList>
          <TabsTrigger value="models">可用模型</TabsTrigger>
          <TabsTrigger value="playground">模型测试</TabsTrigger>
          <TabsTrigger value="api">API接口</TabsTrigger>
        </TabsList>
        <TabsContent value="models" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LLMModelCard
              name="FinGPT-Medium"
              description="针对金融领域优化的中型语言模型，适合一般金融文本分析和生成任务"
              parameters="7B"
              specialization="金融文本分析、报告生成"
              latency="低"
              status="available"
            />
            <LLMModelCard
              name="FinGPT-Large"
              description="针对金融领域优化的大型语言模型，适合复杂金融分析和决策支持"
              parameters="13B"
              specialization="金融分析、市场预测、风险评估"
              latency="中"
              status="available"
            />
            <LLMModelCard
              name="CodeAssist-Finance"
              description="专注于金融代码生成和补全的语言模型"
              parameters="7B"
              specialization="金融代码补全、算法生成"
              latency="低"
              status="available"
            />
            <LLMModelCard
              name="FinGPT-XL"
              description="最先进的金融大语言模型，具有强大的推理和分析能力"
              parameters="70B"
              specialization="复杂金融推理、研究支持、多模态分析"
              latency="高"
              status="limited"
            />
            <LLMModelCard
              name="FinGPT-Multimodal"
              description="支持图表、图像和文本的多模态金融大模型"
              parameters="13B"
              specialization="图表分析、报告解读、多模态理解"
              latency="中"
              status="maintenance"
            />
          </div>
        </TabsContent>
        <TabsContent value="playground" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>模型测试平台</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium">选择模型:</label>
                  <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="fingpt-medium">FinGPT-Medium</option>
                    <option value="fingpt-large">FinGPT-Large</option>
                    <option value="codeassist-finance">CodeAssist-Finance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">输入提示:</label>
                  <textarea
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="请输入您的金融相关问题或指令..."
                    defaultValue="分析中国银行业近期面临的主要风险因素，并提出可能的应对策略。"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium">参数设置:</label>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div>
                      <label className="text-xs text-muted-foreground">温度</label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.7"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs">
                        <span>0</span>
                        <span>1</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">最大长度</label>
                      <input
                        type="range"
                        min="100"
                        max="2000"
                        step="100"
                        defaultValue="1000"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs">
                        <span>100</span>
                        <span>2000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>生成</Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">模型输出:</label>
                  <div className="rounded-md border border-input bg-background p-4 text-sm">
                    <p>中国银行业近期面临的主要风险因素分析及应对策略：</p>
                    <br />
                    <p><strong>一、主要风险因素</strong></p>
                    <p>1. <strong>资产质量压力</strong>：受经济增速放缓影响，部分企业经营困难，可能导致不良贷款率上升。</p>
                    <p>2. <strong>房地产市场风险</strong>：房地产市场调整带来的开发贷和按揭贷款风险增加。</p>
                    <p>3. <strong>地方政府债务风险</strong>：地方政府融资平台债务规模大，偿债压力增加。</p>
                    <p>4. <strong>影子银行风险</strong>：表外业务监管趋严，但风险敞口仍然存在。</p>
                    <p>5. <strong>利率市场化挑战</strong>：净息差收窄，传统盈利模式受到挑战。</p>
                    <br />
                    <p><strong>二、可能的应对策略</strong></p>
                    <p>1. <strong>强化风险管理</strong>：</p>
                    <p>   - 完善全面风险管理体系，提高风险识别和预警能力</p>
                    <p>   - 加强贷前调查、贷中审查和贷后管理</p>
                    <p>   - 建立更精细化的行业和客户风险评估模型</p>
                    <p>2. <strong>优化资产结构</strong>：</p>
                    <p>   - 调整信贷投向，减少高风险领域敞口</p>
                    <p>   - 增加对战略性新兴产业、绿色金融等领域的支持</p>
                    <p>3. <strong>数字化转型</strong>：</p>
                    <p>   - 加大金融科技投入，提升风控的精准性和效率</p>
                    <p>   - 发展线上业务，拓展收入来源</p>
                    <p>4. <strong>资本补充</strong>：</p>
                    <p>   - 多渠道补充资本，提高抵御风险能力</p>
                    <p>   - 合理控制资产扩张速度，保持适当资本充足率</p>
                    <p>5. <strong>业务多元化</strong>：</p>
                    <p>   - 发展财富管理、投资银行等轻资本业务</p>
                    <p>   - 增加非利息收入占比，降低对利差的依赖</p>
                    <br />
                    <p>总体而言，中国银行业应当在监管引导下，坚持稳健经营，加强风险防控，同时积极推进业务转型和创新，以应对当前复杂的经济金融环境。</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API接口文档</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">接口概览</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    大模型推理服务提供RESTful API接口，支持文本生成、代码补全等功能。
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">基础URL</h4>
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    https://api.finllm.szu.edu.cn/v1
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">认证</h4>
                  <p className="text-sm">所有API请求需要在Header中包含API密钥：</p>
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm block mt-1">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">文本生成接口</h4>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">POST /completions</p>
                    <p className="text-sm text-muted-foreground">请求示例：</p>
                    <pre className="rounded-md bg-muted p-4 text-sm font-mono overflow-x-auto">
                      {`{
  "model": "fingpt-medium",
  "prompt": "分析中国银行业近期面临的主要风险因素",
  "max_tokens": 1000,
  "temperature": 0.7
}`}
                    </pre>
                    <p className="text-sm text-muted-foreground mt-2">响应示例：</p>
                    <pre className="rounded-md bg-muted p-4 text-sm font-mono overflow-x-auto">
                      {`{
  "id": "cmpl-123abc",
  "object": "text_completion",
  "created": 1684123456,
  "model": "fingpt-medium",
  "choices": [
    {
      "text": "中国银行业近期面临的主要风险因素包括...",
      "index": 0,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 420,
    "total_tokens": 435
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">代码补全接口</h4>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">POST /code/completions</p>
                    <p className="text-sm text-muted-foreground">请求示例：</p>
                    <pre className="rounded-md bg-muted p-4 text-sm font-mono overflow-x-auto">
                      {`{
  "model": "codeassist-finance",
  "prompt": "# 使用Python分析股票数据\nimport pandas as pd\nimport numpy as np\n\ndef analyze_stock_data(data):",
  "max_tokens": 500,
  "temperature": 0.3
}`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">API密钥管理</h4>
                  <p className="text-sm">您可以在个人设置页面创建和管理API密钥。</p>
                  <Button size="sm" className="mt-1">
                    管理API密钥
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>用量统计</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">本月API调用</div>
              <div className="mt-2 text-2xl font-bold">12,458</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">已处理Token</div>
              <div className="mt-2 text-2xl font-bold">3.2M</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">平均响应时间</div>
              <div className="mt-2 text-2xl font-bold">1.2s</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">剩余配额</div>
              <div className="mt-2 text-2xl font-bold">67%</div>
              <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "67%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LLMModelCard({
  name,
  description,
  parameters,
  specialization,
  latency,
  status,
}: {
  name: string;
  description: string;
  parameters: string;
  specialization: string;
  latency: string;
  status: "available" | "limited" | "maintenance";
}) {
  const statusColors = {
    available: "bg-green-100 text-green-800",
    limited: "bg-amber-100 text-amber-800",
    maintenance: "bg-red-100 text-red-800",
  };

  const statusText = {
    available: "可用",
    limited: "配额受限",
    maintenance: "维护中",
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
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">参数规模:</span>
            <span className="col-span-2 font-medium">{parameters}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">专长领域:</span>
            <span className="col-span-2 font-medium">{specialization}</span>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <span className="text-muted-foreground">响应延迟:</span>
            <span className="col-span-2 font-medium">{latency}</span>
          </div>
          <div className="flex space-x-2 pt-2">
            <Button size="sm" disabled={status === "maintenance"}>
              使用
            </Button>
            <Button size="sm" variant="outline">
              查看文档
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
