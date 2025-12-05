# GoGoGuide Landing Page

[中文](#中文说明) | [English](#english)

---

## 中文说明

GoGoGuide 是一个 AI 旅伴产品的落地页，通过 GitHub Pages 发布，用于收集潜在用户的邮箱并展示产品理念。

### 🚀 快速开始

#### 本地运行

**前置要求：** Node.js 20+

1. 安装依赖：
   ```bash
   npm install
   ```

2. 运行开发服务器：
   ```bash
   npm run dev
   ```

3. 在浏览器中打开 `http://localhost:3000`

#### 构建

```bash
npm run build
```

构建后的文件将输出到 `dist/` 目录。

### 📧 配置邮箱收集功能

本项目使用 [Web3Forms](https://web3forms.com/) 来收集用户邮箱（免费，每月 250 次提交）。

#### 步骤：

1. **获取 Access Key**
   - 访问 https://web3forms.com/
   - 输入你的邮箱地址以接收提交的数据
   - 获取你的免费 Access Key

2. **配置本地环境**
   - 复制 `.env.example` 为 `.env`：
     ```bash
     cp .env.example .env
     ```
   - 在 `.env` 文件中填入你的 Access Key：
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```

3. **配置 GitHub Secrets**（用于自动部署）
   - 进入你的 GitHub 仓库
   - 点击 `Settings` → `Secrets and variables` → `Actions`
   - 点击 `New repository secret`
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Secret: 粘贴你的 Web3Forms Access Key
   - 点击 `Add secret`

### 🌐 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署。

#### 步骤：

1. **启用 GitHub Pages**
   - 进入仓库的 `Settings` → `Pages`
   - Source 选择: `GitHub Actions`

2. **推送代码**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **等待部署完成**
   - 在 `Actions` 标签页查看部署进度
   - 部署成功后，你的网站将在 `https://[你的用户名].github.io/gogoguide-landing_page/` 可访问

#### 注意事项：

- 确保已在 GitHub Secrets 中配置 `VITE_WEB3FORMS_ACCESS_KEY`
- 首次部署可能需要几分钟
- 每次推送到 `main` 分支都会自动触发部署

### 📁 项目结构

```
gogoguide-landing_page/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 部署配置
├── components/
│   ├── Countdown.tsx       # 倒计时组件
│   └── WaitlistForm.tsx    # 邮箱收集表单
├── App.tsx                 # 主应用组件
├── index.html             # HTML 入口
├── index.tsx              # React 入口
├── vite.config.ts         # Vite 配置
└── package.json           # 项目依赖
```

### 🛠 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式（通过 CDN）
- **Web3Forms** - 邮箱收集服务
- **GitHub Actions** - CI/CD
- **GitHub Pages** - 静态网站托管

### 📊 查看收集的邮箱

所有提交的邮箱都会发送到你在 Web3Forms 注册时填写的邮箱地址。你也可以：

1. 登录 [Web3Forms Dashboard](https://web3forms.com/dashboard)
2. 查看所有提交记录
3. 导出数据为 CSV 格式

---

## English

GoGoGuide is a landing page for an AI travel companion product, published via GitHub Pages to collect potential users' emails and showcase the product concept.

### 🚀 Quick Start

#### Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser

#### Build

```bash
npm run build
```

Built files will be output to the `dist/` directory.

### 📧 Configure Email Collection

This project uses [Web3Forms](https://web3forms.com/) to collect user emails (free, 250 submissions/month).

#### Steps:

1. **Get Access Key**
   - Visit https://web3forms.com/
   - Enter your email address to receive submissions
   - Get your free Access Key

2. **Configure Local Environment**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in your Access Key in `.env`:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```

3. **Configure GitHub Secrets** (for automated deployment)
   - Go to your GitHub repository
   - Click `Settings` → `Secrets and variables` → `Actions`
   - Click `New repository secret`
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Secret: Paste your Web3Forms Access Key
   - Click `Add secret`

### 🌐 Deploy to GitHub Pages

This project is configured with GitHub Actions for automatic deployment.

#### Steps:

1. **Enable GitHub Pages**
   - Go to repository `Settings` → `Pages`
   - Source: Select `GitHub Actions`

2. **Push Code**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for Deployment**
   - Check deployment progress in the `Actions` tab
   - Once successful, your site will be available at `https://[your-username].github.io/gogoguide-landing_page/`

#### Notes:

- Ensure `VITE_WEB3FORMS_ACCESS_KEY` is configured in GitHub Secrets
- First deployment may take a few minutes
- Every push to `main` branch will trigger automatic deployment

### 📁 Project Structure

```
gogoguide-landing_page/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment config
├── components/
│   ├── Countdown.tsx       # Countdown component
│   └── WaitlistForm.tsx    # Email collection form
├── App.tsx                 # Main app component
├── index.html             # HTML entry
├── index.tsx              # React entry
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

### 🛠 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via CDN)
- **Web3Forms** - Email collection service
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Static site hosting

### 📊 View Collected Emails

All submitted emails will be sent to the email address you registered with Web3Forms. You can also:

1. Login to [Web3Forms Dashboard](https://web3forms.com/dashboard)
2. View all submission records
3. Export data as CSV

---

## 📝 License

MIT License
