import { Component, Prop, Vue } from "vue-property-decorator";
import { Authorization } from "@/app/models/Authorization";
import { Action } from "vuex-class";
import { AuthActions } from "@/app/store/modules/auth";

@Component({})
export default class Login extends Vue {
  @Prop() public source: string;
  @Action(AuthActions.CheckAuth)
  public checkAuth: ({ username, password }: any) => void;
  public auth: Authorization = new Authorization();
  public valid: boolean = true;
  public $refs: {
    form: HTMLFormElement;
  };
  public loginRules = [(v: any) => !!v || "Введите логин для входа в систему!"];
  public passwordRules = [
    (v: any) => !!v || "Введите пароль для входа в систему!"
  ];

  public onSuccess() {
    if (this.$refs.form.validate()) {
      this.checkAuth(this.auth);
      this.$router.replace("/");
    }
  }
}
