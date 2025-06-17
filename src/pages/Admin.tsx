
import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useToast } from '../hooks/use-toast';
import { useTracking } from '../contexts/TrackingContext';
import { Eye, EyeOff } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { config, updateConfig } = useTracking();

  const [trackingConfig, setTrackingConfig] = useState({
    googleAnalyticsId: '',
    googleTagManagerId: '',
    facebookPixelId: '',
    linkedinPartnerId: '',
    googleSearchConsoleId: ''
  });

  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    if (config) {
      setTrackingConfig(config);
    }
  }, [config]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication with hardcoded credentials from env
    const adminUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
    const adminPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

    if (username === adminUser && password === adminPass) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      toast({
        title: 'Success',
        description: 'Successfully logged in to admin panel',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setUsername('');
    setPassword('');
  };

  const handleSaveTrackingConfig = () => {
    updateConfig(trackingConfig);
    toast({
      title: 'Success',
      description: 'Tracking configuration saved successfully',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setTrackingConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Admin Panel</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Tabs defaultValue="tracking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tracking">Tracking Configuration</TabsTrigger>
            <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="tracking">
            <Card>
              <CardHeader>
                <CardTitle>Tracking & Analytics Configuration</CardTitle>
                <CardDescription>
                  Configure Google Analytics, Tag Manager, Facebook Pixel, and LinkedIn tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="googleAnalyticsId">Google Analytics 4 ID</Label>
                    <Input
                      id="googleAnalyticsId"
                      placeholder="G-XXXXXXXXXX"
                      value={trackingConfig.googleAnalyticsId}
                      onChange={(e) => handleInputChange('googleAnalyticsId', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="googleTagManagerId">Google Tag Manager ID</Label>
                    <Input
                      id="googleTagManagerId"
                      placeholder="GTM-XXXXXXX"
                      value={trackingConfig.googleTagManagerId}
                      onChange={(e) => handleInputChange('googleTagManagerId', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                    <Input
                      id="facebookPixelId"
                      placeholder="1234567890123456"
                      value={trackingConfig.facebookPixelId}
                      onChange={(e) => handleInputChange('facebookPixelId', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedinPartnerId">LinkedIn Partner ID</Label>
                    <Input
                      id="linkedinPartnerId"
                      placeholder="1234567"
                      value={trackingConfig.linkedinPartnerId}
                      onChange={(e) => handleInputChange('linkedinPartnerId', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="googleSearchConsoleId">Google Search Console Verification Code</Label>
                    <Input
                      id="googleSearchConsoleId"
                      placeholder="abcdefghijklmnopqrstuvwxyz1234567890"
                      value={trackingConfig.googleSearchConsoleId}
                      onChange={(e) => handleInputChange('googleSearchConsoleId', e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveTrackingConfig} className="w-full">
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>
                  Monitor your tracking configuration and recent events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800">Google Analytics</h3>
                    <p className="text-sm text-green-600">
                      {trackingConfig.googleAnalyticsId ? '✅ Configured' : '❌ Not configured'}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800">Tag Manager</h3>
                    <p className="text-sm text-blue-600">
                      {trackingConfig.googleTagManagerId ? '✅ Configured' : '❌ Not configured'}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800">Facebook Pixel</h3>
                    <p className="text-sm text-purple-600">
                      {trackingConfig.facebookPixelId ? '✅ Configured' : '❌ Not configured'}
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800">LinkedIn</h3>
                    <p className="text-sm text-orange-600">
                      {trackingConfig.linkedinPartnerId ? '✅ Configured' : '❌ Not configured'}
                    </p>
                  </div>
                </div>

                <div className="text-center text-muted-foreground">
                  <p>Analytics dashboard will show real-time data once tracking is configured and active.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
