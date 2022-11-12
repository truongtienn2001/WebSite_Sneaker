// $(document).ready(function (e) {
//     var i = 1;
//     $("#myBtn").click(function () {
//         $("#myModal").modal();
//     });

//     function KiemTraMa() {
//         var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
//         if ($("#txtMa").val() == "") {
//             $("#tbMa").html("Không được bỏ trống");
//             return false;
//         }
//         if (!re.test($("#txtMa").val())) {
//             $("#tbMa").html("mã tour theo mẫu: XXX-XXX-00-0000");
//             return false;
//         }
//         $("#tbMa").html("*");
//         return true;
//     }
//     $("#txtMa").blur(KiemTraMa);

//     function KiemTraNgay() {
//         if ($("#txtDate").val() == "") {
//             $("#tbDate").html("Không được bỏ trống");
//             return false;
//         }
//         var day = new Date($("#txtDate").val());
//         var today = new Date();
//         today.setDate(today.getDate() + 30);
//         if (day < today) {
//             $("#tbDate").html("Phải sau ngày hiện tại 30 ngày");
//             return false;
//         }
//         $("#tbDate").html("*");
//         return true;
//     }
//     $("#txtDate").blur(KiemTraNgay);

//     function KiemTraHanhTrinh() {
//         if ($("#txtHanhtrinh").val() == "") {
//             $("#tbHanhtrinh").html("Không được bỏ trống");
//             return false;
//         }
//         $("#tbHanhtrinh").html("*");
//         return true;
//     }
//     $("#txtHanhtrinh").blur(KiemTraHanhTrinh);

//     function KiemTraGiaTour() {
//         if ($("#txtGia").val() == "") {
//             $("#tbGia").html("Không được bỏ trống");
//             return false;
//         }
//         var gia = ($("#txtGia").val());
//         if (gia <= 0) {
//             $("#tbGia").html("Giá Tour là số >0");
//             return false;
//         }
//         $("#tbGia").html("*");
//         return true;
//     }
//     $("#txtGia").blur(KiemTraGiaTour);

//     function KiemTraThoiGian() {
//         if ($("#txtTime").val() == "") {
//             $("#tbTime").html("Không được bỏ trống");
//             return false;
//         }
//         $("#tbTime").html("*");
//         return true;
//     }
//     $("#txtTime").blur(KiemTraThoiGian);

    
//     $("#btnSave").click(function () {
//         if (!KiemTraMa() || !KiemTraHanhTrinh() || !KiemTraNgay() || !KiemTraGiaTour()||!KiemTraThoiGian()) {
//             alert("Mời bạn nhập đủ thông tin");
//             return false;
//         }
//         var matour = $("#txtMa").val();
//         var diemden = $("#txtHanhtrinh").val();
//         var date = $("#txtDate").val();
//         var time = $("#txtTime").val();
//         var gia = $("#txtGia").val();
//         var anh = $("#txtAnh").val().substring(12);
//         var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>"+date+"</td><td>"
//             + time + "</td><td>" + gia + "</td><td>" + anh + "</td><tr>";
//         $("#table").append(them);
//         $("#myModal").modal("hide");
//         return true;
//     });
// });