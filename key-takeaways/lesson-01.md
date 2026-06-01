# Tổng hợp kiến thức buổi 1
## Playwright
**1. Playwright là gì?**
- Là một framework, có tiền thân là Puppeteer được Microsoft tài trợ và phát triển lên. Playwright ra đời vào ngày 31/01/2010 và version mới nhất là v1.57
- Ưu điểm: 
  - Cross browser: Hỗ trợ đa trình duyệt như: Chrome, Egde, Firefox, Safari và hỗ trợ lên tới 143 phiên bản trình duyệt
  - Cross platform: Code một lần và chạy được trên các hệ điều hành phổ biến: Windows, Linux, MacOS
  - Các tính năng nổi bật: auto-waiting, auto-retry assertion giúp giảm flasky tests,...
  - Report đầy đủ thông tin: Pass/ fail theo từng loại trình duyệt, chi tiết ở từng thời điểm
  - Code gen: Thao tác để sinh ra code

**2. Các công cụ cài đặt cho bài học**
***2.1 NVM - Node Version Manager***
- NVM dùng để quản lý các phiên bản của NodeJS.
- NodeJS là công cụ để thực thi code 
- Có 2 options:
  - Cài đặt trực tiếp NodeJS vào máy để thực thi code 
  - Cài thông qua NVM 
--> Chọn thông qua NVM vì dễ chuyển đổi qua nhiều phiên bản NodeJS

***2.2 Git & GitHub***
- Git dùng để quản lý source code 
- GitHub dùng để chia sẻ code và làm việc nhóm
- Cấu hình Git:
Trước khi làm việc với Git, cần cài đặt một số cấu hình mặc định sau: 
  - Config username (tên người dùng): *git config --global user.name "<tên>"*
  - Config email (địa chỉ email): *git config --global user.email "<email>"*
  - Config branch default (nhánh mặc định): *git config --global init.defaultBranch main*

***2.3 Visual Studio Code***
- VS Code - IDE - Integrated development environment: Là một công cụ để viết code 

**3. Kết nối với GitHub và cài đặt Playwright**
***3.1 Tạo SSH key và Thêm SSH key vào GitHub***
- SSH key: Là một cặp khóa giúp xác thực đăng nhập trở nên dễ dàng 
- Được lưu trữ ở ~/.ssh. Trong đó "~" đại diện cho thư mục home
- Lệnh tạo SSH key: *ssh-keygen -t rsa -b 4096 -C "your_email@example.com"*
- Lấy nội dung SSH key: *cat ~/.ssh/id_rsa.pub*
- Truy cập Git *https://github.com/settings/ssh/new* để thêm ssh key

***3.2 Cài đặt Playwright:***
- Tạo thư mục mới
- Mở thư mục bằng VS Code
- Mở terminal và chạy lệnh: *npm init playwright@latest*
- Nhấn "Enter" để cài đặt theo mặt định

**5. Đưa code lên GitHub**
- Tạo repo trên GitHub:
  - Truy cập: https://github.com/new
  - Điền tên repository
  - Chọn “Public”
- Khởi tạo: 
  - Khởi tạo repo local: *git init*
  - Liên kết repository vừa tạo với Git: *git remote add origin <ssh_link>*
  - Thêm code: git add .
  - Thêm commit: git commit -m "init project"
- Push code: *git push origin main*
