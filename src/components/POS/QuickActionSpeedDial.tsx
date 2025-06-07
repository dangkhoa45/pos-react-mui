import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import UndoIcon from "@mui/icons-material/Undo";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
export default function QuickActionSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="quick actions"
      icon={<SpeedDialIcon icon={<EditIcon />} />}
      sx={{
        position: "fixed",
        bottom: 80,
        right: 24,
        "& .MuiSpeedDial-fab": {
          bgcolor: "grey.300",
          color: "primary.main",
          width: 56,
          height: 56,
        },
      }}
    >
      <SpeedDialAction
        icon={<ReceiptLongIcon />}
        tooltipTitle="Danh sách hóa đơn"
      />
      <SpeedDialAction icon={<UndoIcon />} tooltipTitle="Hoàn tác" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="In tạm" />
    </SpeedDial>
  );
}
