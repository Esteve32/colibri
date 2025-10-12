"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type InvoiceStatus = "paid" | "overdue" | "upcoming";

interface Invoice {
  name: string;
  billingDate: string;
  status: InvoiceStatus;
  amount: string;
  plan: string;
  downloadUrl: string;
}

const initialInvoices: Invoice[] = [
  {
    name: "Invoice #007",
    billingDate: "Dec 1, 2025",
    status: "paid",
    amount: "USD $10.00",
    plan: "Basic Plan",
    downloadUrl: "/invoices/invoice-007.pdf",
  },
  {
    name: "Invoice #008",
    billingDate: "Jan 1, 2026",
    status: "upcoming",
    amount: "USD $10.00",
    plan: "Basic Plan",
    downloadUrl: "/invoices/invoice-008.pdf",
  },
  {
    name: "Invoice #006",
    billingDate: "Nov 1, 2025",
    status: "overdue",
    amount: "USD $10.00",
    plan: "Basic Plan",
    downloadUrl: "/invoices/invoice-006.pdf",
  },
];

export default function InvoicesTable() {
  const [invoices] = useState<Invoice[]>(initialInvoices);

  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "overdue":
        return "bg-red-100 text-red-700";
      case "upcoming":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "";
    }
  };

  return (
    <Card>
        <CardHeader className="border-b border-b-border">
        <h2 className="text-xl font-semibold">Invoices</h2>
        <p className="text-muted-foreground">A list of your recent invoices.</p>
      </CardHeader>
      <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Billing Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.billingDate}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(invoice.status)}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.plan}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => window.open(invoice.downloadUrl, "_blank")}
                >
                  <Download className="h-4 w-4" /> Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  );
}
