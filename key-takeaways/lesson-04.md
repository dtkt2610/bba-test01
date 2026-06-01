# Tổng hợp kiến thức buổi 4,5
**1. Object là gì?**
- Object được sử dụng để khai báo đối tượng, dữ liệu tổ chức theo thực thể. Mỗi thuộc tính bao gồm một cặp khóa (key) và giá trị (value), giúp mô tả các thực thể một cách chi tiết.
- Thao tác: Có thể thực hiện in dữ liệu ra, thêm, sửa, xóa các thuộc tính của đối tượng 
- Khai báo Object: 
  - const <tên_object> = {
    {key} : {value}
  }
  - Trong đó: key luôn có kiểu string, value có kiểu: string, number, boolean, object
- Truy xuất dữ liệu trong Object:
  - Dot notation (dấu chấm): 
  Vd: let sinhVien = {name: "Nguyen A", tuoi: 22};
      console.log(sinhVien.name);
      console.log(sinhVien.tuoi);
  - Bracket notation (Dấu ngoặc vuông)
  Vd: console.log(sinhVien["name"]); 
- Thêm hoặc sửa Object: obj.key = value
- Xóa: delete obj.key
- Object lồng nhau: Một object có thể chứa một object khác làm value của nó, cho phép tạo ra các cấu trúc dữ liệu phân cấp

**2. Array - Mảng**
- Array là một kiểu dữ liệu dùng để lưu trữ danh sách các phần tử. Tất cả các phần tử trong một mảng có cùng một kiểu dữ liệu
- Vị trí của mỗi phần tử được đánh số bắt đầu từ 0
- Cú pháp: 
  - const <ten_mang> = [gia_tri_1, gia_tri_2,..., gia_tri_n]

**3. Function - Hàm**
- Function (Hàm) là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.
- Cú pháp: 
    function tenHam() {
    // các dòng lệnh bên trong
    }
  - Trong đó: 
    - function — từ khoá bắt buộc
    - tenHam — tên do bạn đặt
    - {} — thân hàm, chứa code sẽ thực thi
- Quy tắc đặt tên hàm: 
  - Dùng camelCase
  - Nên bắt đầu bằng động từ
  - Tên phải diễn tả hành động mà hàm thực hiện
- Gọi hàm: tenHam();
- Function với tham số: nhận các giá trị đầu vào thông qua tham số để xử lý logic linh hoạt hơn
    function tenHam(thamSo) {
    // các dòng lệnh bên trong
    }
- Function với giá trị trả về *return*: Hàm xử lý xong thì sẽ gửi kết quả về cho người gọi

**4. Cài đặt Playwright:**
- Tạo thư mục mới
- Mở thư mục bằng VS Code
- Mở terminal và chạy lệnh: *npm init playwright@latest*
- Nhấn "Enter" để cài đặt theo mặt định

**5. break và continue**
***break***: dùng để thoát hoàn toàn và ngay lập tức khỏi vòng lặp hiện tại
***continue***: dùng để bỏ qua các câu lệnh trong lần lặp hiện tại và chuyển sang lần lập kế tiếp 