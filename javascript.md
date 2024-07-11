1. Sự khác biệt giữa foreach và map là gì ?
foreach trả về underfind còn map trả về mảng mới dựa chứa các giá trị được chuyển đổi từ mảng gốc. 
2. Sự khác nhau giữa var, let , const ?
 Scope : var là trong funtion scope còn đối với let ,const trong function scope
 Hoisting : var thì có còn let, const thì không  ( Hosting tức là đưa phần khai báo nên đầu phạm vi)
 Khai báo : var thì được gán lại và khai báo lại , let thì được gán lại chứ không được khái báo lại , const thì không đươc gán lại và không được khai báo lại.
3. Sự khác nhau giữa null và underfind trong js ?
Underfind tức là 1 biến được khai báo nhưng chưa được gán giá trị còn null là giá trị rỗng
4. Sự khác nhau giữa "=="  và "===" ?
 == so sánh giá trị nếu kiểu khác nhau thì sẽ chuyển về cùng kiểu để so sánh còn '===' tức là so sánh giá trị và type data
5. Những cách khác nhau để khái báo biến trong js ?
Ta có 3 cách để khai báo biến : sử dụng var , let , const 
6. Phạm vi ( scope ) trong JS ? 
 Có 3 loại scope : global scope , funtion scope ( tức là trong thân cùa 1 hàm ) và block scope ( trong dấu ngoặc nhọn) 
7. Toán tử ba ngôi ( tenary operator) là gì ?
Syntax: condition ? true : false  
 Mục đích làm phím tắt cho câu lệnh if
8. Làm thế nào để triển khai Custom Event trong js ?
Dùng để tạo và phát tán một sự kiện tùy chỉnh
9. Closure (bao đóng) trong js là gì ?
<!-- 
Thời gian sống của 1 biến : global và local
Biến global sống cho tới khi đóng ứng dụng còn timelife của local là sống khi function được gọi và xoá khi function kết thúc
 -->
 -->
 Closure ( bao đóng) là 1 hàm có thể nhớ và truy cập các biến từ phạm vi của hàm cha của nó ngay cả khi hàm cha của nó đã hoàn thành thực thi.
 10. Arrow function có this không ? 
   arrow funciton không có this chỉ kế thừa từ phạm vi xung quanh global trên môi trường node hoặc là window trên môi trường trình duyệt.
 11. Phương thức map có làm thay đổi mảng ban đầu không ??
 Phương thức map không làm thay đổi mảng ban đầu và nó trả về mảng mới chứa các giá trị đã được chuyển đổi từ mảng gốc.
12.  Phương thức foreach có trả về mảng mới không ??
Phương thức forEach không trả về mảng mới. Nó chỉ gọi hàm trên mỗi phần tử đã cung cấp trên mỗi phần tử mảng.
13. Phương thức filter dùng để làm gì ? 
Dùng để lọc một mảng dựa trên 1 điều kiện . Phương thức filter trả ra mảng mới thoả mãn điều kiênj và không làm thay đổi mảng ban đầu.
14. Cách sử dụng phương thức reduce() ??
 Phương thức reduce() sử dụng để giảm 1 mảng thành 1 giá trị duy nhất.
15. Sự khác nhau giữa phhơng thức map và reduce ?

Phương thức reduce chỉ trả ra 1 gía trị đầu ra duy nhât còn map trả ra mảng mảng dựa 
16. Prototype chain trong JS là gì ?
Prototype chain là cơ chế kế thừa trong js nơi mà các đối tượng có thể kế thừa các thuôc tính và phương thức từ prototype của chúng.
Khi truy cập một thuộc tính, JavaScript sẽ tìm kiếm trên đối tượng đó trước, nếu không tìm thấy sẽ tiếp tục tìm trên prototype chain cho đến khi gặp null.





