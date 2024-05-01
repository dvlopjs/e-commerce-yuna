import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface DialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  actions?: boolean;
  children: React.ReactNode;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const DialogReusable: React.FC<DialogProps> = ({
  title,
  open,
  onClose,
  actions,
  children,
}) => {
  const theme = useTheme();
  const upXs = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(upXs);

  return (
    <React.Fragment>
      <BootstrapDialog
        PaperProps={{
          sx: {
            backgroundColor: "#FCF7F8",
            minWidth: upXs ? 500 : 120,
          },
        }}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box m={0} p={2}>
          <Typography fontFamily={"cursive"} variant="h5" fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
        {actions ? (
          <DialogActions>
            <Button autoFocus onClick={onClose}>
              Save changes
            </Button>
          </DialogActions>
        ) : null}
      </BootstrapDialog>
    </React.Fragment>
  );
};
