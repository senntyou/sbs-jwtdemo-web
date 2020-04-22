<template>
  <div class="navbar">
    <hamburger
      :toggle-click="toggleSideBar"
      :is-active="sidebar.opened"
      class="hamburger-container"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <span
            class="dp-inline-block mg-l-5 mg-r-5 ps-relative"
            style="line-height: 40px; top: -5px;"
            >{{ name }}</span
          >
          <img :src="avatar" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item> {{ $t('navbar.dashboard') }} </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">
              {{ $t('navbar.logOut') }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template v-if="device !== 'mobile'">
        <el-tooltip
          :content="$t('navbar.screenfull')"
          effect="dark"
          placement="bottom"
        >
          <screenfull class="screenfull right-menu-item" />
        </el-tooltip>

        <error-log class="errLog-container right-menu-item" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/sys/components/Breadcrumb';
import Hamburger from '@/sys/components/Hamburger';
import ErrorLog from '@/sys/components/ErrorLog';
import Screenfull from '@/sys/components/Screenfull';
import ThemePicker from '@/sys/components/ThemePicker';

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    ThemePicker,
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'avatar', 'device']),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0 !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    position: relative;

    &:focus {
      outline: none;
    }
    .right-menu-item {
      float: right;
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
      margin-top: 15px;
    }
    .international {
      vertical-align: top;
    }
    .theme-switch {
      margin-top: 7px;
    }
    .avatar-container {
      height: 40px;
      margin-right: 30px;
      margin-top: 5px;

      .avatar-wrapper {
        position: relative;
        cursor: pointer;
        .user-avatar {
          width: 40px;
          height: 40px;
          vertical-align: top;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
