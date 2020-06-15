﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using DevExpress.XtraEditors;
using System.Data.SqlClient;

namespace QTSoftware
{
    public partial class Dangnhap : DevExpress.XtraEditors.XtraForm
    {
        public static bool ResultOk = false;
        public Dangnhap()
        {
            InitializeComponent();

        }

        private void hyperlinkLabelControl1_Click(object sender, EventArgs e)
        {
            Dangky dk = new Dangky();
            dk.ShowDialog();

        }

        private void simpleButton1_Click(object sender, EventArgs e)
        {
            CheckLogin();

        }

        public void Skin()
        {
            DevExpress.LookAndFeel.DefaultLookAndFeel sk = new DevExpress.LookAndFeel.DefaultLookAndFeel();
            sk.LookAndFeel.SkinName = "Springtime";
        }

        //Hàm Kiểm Tra Tài Khoản Mật Khẩu có trùng Với CSDL không 
        public void CheckLogin()
        {
            {
                SqlConnection con = new SqlConnection(StringConnectionSql.StrConnect);
                con.Open();
                // Lấy mật Khẩu Nếu Tên Tài Khoản đang Trùng với EditText tài khoản
                SqlCommand comand = new SqlCommand("Select Password from TAIKHOAN WHERE Username ='" + edt_taikhoan.Text.Trim() + "'", con);
                SqlDataReader r = comand.ExecuteReader();
                r.Read();
                if (edt_taikhoan.Text == "" || edt_matkhau.Text == "")
                {
                    MessageBox.Show("Vui Lòng Xem lại Tài Khoản Mật Khẩu !");
                }
                else if (edt_matkhau.Text.Trim() == r.GetValue(0).ToString())
                {
                    MessageBox.Show("Đăng Nhập Thành Công !");
                    this.Hide();
                    r.Close();
                    con.Close();
                    ResultOk = true;
                    Mainchinh m = new Mainchinh(this, edt_taikhoan.Text.Trim());
                    m.Show();
                }
                else
                {
                    MessageBox.Show("Đăng Nhập Thất Bại ");
                }
                r.Close();
                con.Close();
            }

        }

        private void Dangnhap_Load(object sender, EventArgs e)
        {
            Skin();
        }

        private void checkEdit1_CheckedChanged(object sender, EventArgs e)
        {
            if (checkEdit1.Checked)
            {
                edt_matkhau.Properties.UseSystemPasswordChar = false;
            }
            else
            {
                edt_matkhau.Properties.UseSystemPasswordChar = true;
            }
        }

        private void simpleButton2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}