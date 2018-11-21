import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
      // 인덱스
      // => 접속하면 최초의 화면
      // prep; none
    },
    {
      path: '/profile/create_profile',
      name: 'create_profile',
      // 프로필 생성
      // => 회원 가입 이후 등장하는 화면. 회원 가입/평가 작성
      // prep; Signup
      component: () => import(/* webpackChunkName: "about" */ './views/profile/CreateProfile.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      // 프로필 조회
      // => 프로필 내용 조회
      // prep; none
      component: () => import(/* webpackChunkName: "about" */ './views/profile/Profile.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // 대쉬보드
      // => 대쉬보드 내용 조회
      // prep; none
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      // 회원 가입
      // => 회원 가입 정보 기입
      // prep; none
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      // 로그인
      // => 로그인
      // prep; none
      component: () => import(/* webpackChunkName: "about" */ './views/Signin.vue'),
    },
    {
      path: '/evaluation/workspacelist',
      name: 'workspacelist',
      // 평가하기
      // => 그룹 공용 계정에 접근하여, 평가용 계정을 인증해주세요.
      // prep; GetStarted
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/WorkspaceList.vue'),
    },
    {
      path: '/evaluation/grouplist',
      name: 'grouplist',
      // 그룹 리스트
      // => 그룹(부서 리스트)
      // prep; WorkspaceList
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/GroupList.vue'),
    },
    {
      path: '/evaluation/groupprofilelist',
      name: 'groupprofilelist',
      // 그룹프로필 리스트
      // => 그룹 내 개인 프로필 리스트
      // prep; grouplist
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/GroupProfileList.vue'),
    },
    {
      path: '/evaluation/sheet',
      name: 'sheet',
      // 평가시트
      // => 평가시트
      // prep; groupprofilelist
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/Sheet.vue'),
    },
    {
      path: '/evaluation/getstarted',
      name: 'getstarted',
      // 평가 시작하기
      // => 평가 시작을 위해 인증 혹은 평가하기로 시작
      // prep; none
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/GetStated.vue'),
    },
    {
      path: '/evaluation/getwallet',
      name: 'getwallet',
      // 평가하기
      // => 그룹 공용 계정에 접근하여, 평가용 계정을 인증해주세요.
      // prep; GetStarted
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/GetWallet.vue'),
    },
    {
      path: '/evaluation/getauth',
      name: 'getauth',
      // 평가용 계정 인증하기
      // => 그룹 공용 계정에 접근하여, 평가용 계정을 인증해주세요.
      // prep; GetStarted
      component: () => import(/* webpackChunkName: "about" */ './views/evaluation/GetAuth.vue'),
    },
    {
      path: '/pool/SetOrganization',
      name: 'setorganization',
      // 조직 개설하기
      // => 조직을 개설
      // prep; none;
      component: () => import(/* webpackChunkName: "about" */ './views/pool/SetOrganization.vue'),
    },
    {
      path: '/pool/SetWorkspace',
      name: 'setworkspace',
      // workspace 개설
      // => 워크스페이스 개설
      // prep; SetOrganization
      component: () => import(/* webpackChunkName: "about" */ './views/pool/SetWorkspace.vue'),
    },
    {
      path: '/pool/SetRewardPool',
      name: 'setrewardpool',
      // 리워드풀 개설
      // prep; SetWorkspace
      component: () => import(/* webpackChunkName: "about" */ './views/pool/SetRewardPool.vue'),
    },

  ],
});
