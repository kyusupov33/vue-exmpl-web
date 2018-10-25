import Vue from "vue";
import Vuetify from "vuetify/es5/components/Vuetify";
import VBtn from "vuetify/es5/components/VBtn";
import VApp from "vuetify/es5/components/VApp";
import VCard from "vuetify/es5/components/VCard";
import VPagination from "vuetify/es5/components/VPagination";
import VTextField from "vuetify/es5/components/VTextField";
import VNavigationDrawer from "vuetify/es5/components/VNavigationDrawer";
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import VList from "vuetify/es5/components/VList";
import VIcon from "vuetify/es5/components/VIcon";
import VGrid from "vuetify/es5/components/VGrid";
import VExpansionPanel from "vuetify/es5/components/VExpansionPanel";
import VToolbar from "vuetify/es5/components/VToolbar";
import VDataTable from "vuetify/es5/components/VDataTable";
import VAlert from "vuetify/es5/components/VAlert";
import VProgressLinear from "vuetify/es5/components/VProgressLinear";
import VDialog from "vuetify/es5/components/VDialog";
import VTooltip from "vuetify/es5/components/VTooltip";
import VForm from "vuetify/es5/components/VForm";
import VDivider from "vuetify/es5/components/VDivider";
import VDatePicker from "vuetify/es5/components/VDatePicker";
import VMenu from "vuetify/es5/components/VMenu";
import VSelect from "vuetify/es5/components/VSelect";
import transitions from "vuetify/es5/components/transitions";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VCard,
    VPagination,
    VNavigationDrawer,
    VProgressCircular,
    VExpansionPanel,
    VList,
    VIcon,
    VToolbar,
    VAlert,
    VDialog,
    VApp,
    VTextField,
    VBtn,
    VGrid,
    VDataTable,
    VProgressLinear,
    VTooltip,
    VForm,
    VDivider,
    VDatePicker,
    VMenu,
    VSelect,
    transitions
  },
  theme: {
    primary: "#2196F3",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
