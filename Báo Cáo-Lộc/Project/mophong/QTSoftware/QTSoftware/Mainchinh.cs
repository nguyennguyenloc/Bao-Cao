﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using DevExpress.XtraBars;
using System.Data.SqlClient;

namespace QTSoftware
{
    public partial class Mainchinh : DevExpress.XtraBars.Ribbon.RibbonForm
    {
        Dangnhap _frmDN;
        String IdName;
        public Mainchinh(Dangnhap Form, String Usename)
        {
            InitializeComponent();
            _frmDN = Form;
            IdName = Usename;
            Role_USer();
            //Kiểm tra quyền                 
        }

        private void barButtonItem1_ItemClick(object sender, ItemClickEventArgs e)
        {
            _frmDN.Show();
            this.Close();
        }

        private void barButtonItem2_ItemClick(object sender, ItemClickEventArgs e)
        {
            DoiMatKhau dmk = new DoiMatKhau(IdName);
            dmk.ShowDialog();

        }
        String x;
        public bool Check_Role()
        {
            // Mở kết Nối 
            SqlConnection con = new SqlConnection(StringConnectionSql.StrConnect);
            con.Open();
            SqlCommand comand = new SqlCommand("Select Role from TAIKHOAN WHERE Username ='" + IdName + "'", con);
            SqlDataReader r = comand.ExecuteReader();
            r.Read();
            x = r.GetValue(0).ToString();
            if (r.GetValue(0).ToString() == "True")
                return true;
            else
                return false;
        }
        //Phân Quyền 
        public void Role_USer()
        {
            if (Check_Role() == true)
            {
                btn_dangxuat.Enabled = true;
                btn_lambaithi.Enabled = true;
                btn_Quanlycauhoi.Enabled = true;
                btn_quanlyuser.Enabled = true;
                btn_doimatkhau.Enabled = true;
                ribbonPage2.Visible = true;
            }
            else
            {
                btn_dangxuat.Enabled = true;
                btn_lambaithi.Enabled = true;
                btn_Quanlycauhoi.Enabled = false;
                btn_quanlyuser.Enabled = false;
                btn_doimatkhau.Enabled = true;
            }
        }

        private void barButtonItem5_ItemClick(object sender, ItemClickEventArgs e)
        {
            Quanlycauhoi qlch = new Quanlycauhoi();
            qlch.ShowDialog();
        }

        private void btn_lambaithi_ItemClick(object sender, ItemClickEventArgs e)
        {
            FormThongBaoThi tb = new FormThongBaoThi(IdName);
            tb.ShowDialog();
        }

        private void barButtonItem1_ItemClick_1(object sender, ItemClickEventArgs e)
        {
            LichsuThi ls = new LichsuThi();
            ls.ShowDialog();
        }

        private void btn_quanlyuser_ItemClick(object sender, ItemClickEventArgs e)
        {
            Quanlyuser user = new Quanlyuser();
            user.ShowDialog();
        }

        private void btnHotro_ItemClick(object sender, ItemClickEventArgs e)
        {
            HotroUser ht = new HotroUser();
            ht.ShowDialog();
        }
    }
}