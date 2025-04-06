
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BarChart2, PieChart as PieChartIcon, TrendingUp, UsersRound } from 'lucide-react';
import { getAllBrands, getCategories } from '@/data/brands';

const ImpactPage: React.FC = () => {
  const brands = getAllBrands();
  const categories = getCategories();
  
  // Calculate statistics
  const totalBrands = brands.length;
  const totalAlternatives = brands.reduce((acc, brand) => acc + brand.alternatives.length, 0);
  
  // Category distribution data
  const categoryData = categories.map(category => {
    const brandCount = brands.filter(brand => brand.category === category).length;
    return {
      name: category,
      count: brandCount,
      percentage: Math.round((brandCount / totalBrands) * 100)
    };
  }).sort((a, b) => b.count - a.count);
  
  // Alternative distribution data
  const alternativeData = categories.map(category => {
    const brandsInCategory = brands.filter(brand => brand.category === category);
    const alternativeCount = brandsInCategory.reduce(
      (acc, brand) => acc + brand.alternatives.length, 0
    );
    return {
      name: category,
      count: alternativeCount
    };
  }).sort((a, b) => b.count - a.count);
  
  // Pie chart colors
  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#E5DEFF', '#8B5CF6'];
  
  // Recent additions (would be dynamic in a real app with timestamps)
  const recentAdditions = brands.slice(0, 5);
  
  // Monthly changes data (simulated)
  const monthlyData = [
    { name: 'Jan', brands: 28 },
    { name: 'Feb', brands: 35 },
    { name: 'Mar', brands: 42 },
    { name: 'Apr', brands: 53 },
    { name: 'May', brands: 65 },
    { name: 'Jun', brands: 75 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-palestinian-green">Impact Statistics</h1>
        <p className="text-muted-foreground mb-8">
          Tracking the growth and impact of ethical consumer choices through boycott data.
        </p>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Brands</p>
                  <p className="text-3xl font-bold">{totalBrands}</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-palestinian-red" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-3xl font-bold">{categories.length}</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <PieChartIcon className="h-6 w-6 text-palestinian-green" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Alternatives</p>
                  <p className="text-3xl font-bold">{totalAlternatives}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Alternatives</p>
                  <p className="text-3xl font-bold">{(totalAlternatives / totalBrands).toFixed(1)}</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <UsersRound className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Brands by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-80"
                config={{
                  brands: { color: '#9b87f5' },
                }}
              >
                <BarChart data={categoryData} layout="vertical" margin={{ left: 100 }}>
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={90} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  {payload[0].name}
                                </span>
                                <span className="font-bold">
                                  {payload[0].value}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Percentage
                                </span>
                                <span className="font-bold">
                                  {categoryData.find(item => item.name === payload[0].payload.name)?.percentage}%
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="count" fill="var(--color-brands)" radius={[4, 4, 4, 4]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribution of Alternatives</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-80">
                <PieChart>
                  <Pie
                    data={alternativeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {alternativeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {payload[0].name}
                              </span>
                              <span className="font-bold text-lg">
                                {payload[0].value} alternatives
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Growth Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Monthly Database Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-80"
              config={{
                brands: { color: '#6E59A5' },
              }}
            >
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                  }
                />
                <Bar dataKey="brands" fill="var(--color-brands)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        {/* Recent Additions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Additions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Brand</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Alternatives</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAdditions.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell className="font-medium">{brand.name}</TableCell>
                    <TableCell>
                      <Badge variant="palestinian">{brand.category}</Badge>
                    </TableCell>
                    <TableCell>{brand.alternatives.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpactPage;
