import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  styled,
  useTheme,
} from "@material-ui/core";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from "@material-ui/core/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:600px)");

  const title = ["Courses", "Our Leaners", "Contact", "Log In", "Sign Up"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (matches) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <Menu />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TeenVest
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {title.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TeenVest
          </Typography>

          {title.map((text) => (
            <Button color="inherit" key={text}>
              {text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
