<template>
  <div class="p-grid p-fluid dashboard">
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Users</span>
        <span class="detail">Number of visitors</span>
        <span class="count visitors">12</span>
      </div>
    </div>
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Sales</span>
        <span class="detail">Number of purchases</span>
        <span class="count purchases">534</span>
      </div>
    </div>
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Revenue</span>
        <span class="detail">Income for today</span>
        <span class="count revenue">$3,200</span>
      </div>
    </div>

    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #007be5; color: #00448f">
          <span>TV</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-search"></i>
          <span>Total Queries</span>
          <span class="count">523</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #ef6262; color: #a83d3b">
          <span>TI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-question-circle"></i>
          <span>Total Issues</span>
          <span class="count">81</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #20d077; color: #038d4a">
          <span>OI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-filter"></i>
          <span>Open Issues</span>
          <span class="count">21</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #f9c851; color: #b58c2b">
          <span>CI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-check"></i>
          <span>Closed Issues</span>
          <span class="count">60</span>
        </div>
      </div>
    </div>

    <div class="p-col-12 p-md-6 p-lg-4">
      <Panel header="Tasks" style="height: 100%">
        <ul class="task-list">
          <li>
            <Checkbox name="task" value="reports" v-model="tasksCheckbox" />
            <span class="task-name">Sales Reports</span>
            <i class="pi pi-chart-bar" />
          </li>
          <li>
            <Checkbox name="task" value="invoices" v-model="tasksCheckbox" />
            <span class="task-name">Pay Invoices</span>
            <i class="pi pi-dollar" />
          </li>
          <li>
            <Checkbox name="task" value="dinner" v-model="tasksCheckbox" />
            <span class="task-name">Dinner with Tony</span>
            <i class="pi pi-user" />
          </li>
          <li>
            <Checkbox name="task" value="meeting" v-model="tasksCheckbox" />
            <span class="task-name">Client Meeting</span>
            <i class="pi pi-users" />
          </li>
          <li>
            <Checkbox name="task" value="theme" v-model="tasksCheckbox" />
            <span class="task-name">New Theme</span>
            <i class="pi pi-globe" />
          </li>
          <li>
            <Checkbox name="task" value="flight" v-model="tasksCheckbox" />
            <span class="task-name">Flight Ticket</span>
            <i class="pi pi-briefcase" />
          </li>
        </ul>
      </Panel>
    </div>

    <div class="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
      <Panel header="Contact Us">
        <div class="p-grid">
          <div class="p-col-12">
            <Dropdown
              v-model="dropdownCity"
              :options="dropdownCities"
              optionLabel="name"
              placeholder="Select a City"
            />
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Name" />
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Age" />
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Message" />
          </div>
          <div class="p-col-12">
            <Button type="button" label="Send" icon="pi pi-envelope" />
          </div>
        </div>
      </Panel>
    </div>

    <!-- <div class="p-col-12 p-lg-4 contacts">
      <Panel header="Contacts">
        <ul>
          <li>
            <button class="p-link">
              <span class="name">Claire Williams</span>
              <span class="email">clare@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Jason Dourne</span>
              <span class="email">jason@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Jane Davidson</span>
              <span class="email">jane@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Tony Corleone</span>
              <span class="email">tony@primevue.com</span>
            </button>
          </li>
        </ul>
      </Panel>
    </div> -->

    <div class="p-col-12 p-lg-4">
      <Panel header="Activity" style="height: 100%">
        <div class="activity-header">
          <div class="p-grid">
            <div class="p-col-6">
              <span style="font-weight: bold">Last Activity</span>
              <p>Updated 1 minute ago</p>
            </div>
            <div class="p-col-6" style="text-align: right">
              <Button label="Refresh" icon="pi pi-refresh" />
            </div>
          </div>
        </div>

        <ul class="activity-list">
          <li>
            <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
              <h5 class="activity p-m-0">Income</h5>
              <div class="count">$900</div>
            </div>
            <ProgressBar :value="95" :showValue="false" />
          </li>
          <li>
            <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
              <h5 class="activity p-m-0">Tax</h5>
              <div class="count" style="background-color: #f9c851">$250</div>
            </div>
            <ProgressBar :value="24" :showValue="false" />
          </li>
        </ul>
      </Panel>
    </div>

    <div class="p-col-12 p-lg-6">
      <div class="card">
        <h1 style="font-size: 16px">Recent Sales</h1>
        <DataTable
          :value="products"
          class="p-datatable-customers"
          :rows="5"
          style="margin-bottom: 20px"
          :paginator="true"
        >
          <Column>
            <template #header> Logo </template>
            <template #body="slotProps">
              <img
                :src="'assets/layout/images/product/' + slotProps.data.image"
                :alt="slotProps.data.image"
                width="50"
              />
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true"></Column>
          <Column field="category" header="Category" :sortable="true"></Column>
          <Column field="price" header="Price" :sortable="true">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column>
            <template #header> View </template>
            <template #body>
              <Button
                icon="pi pi-search"
                type="button"
                class="p-button-success p-mr-2 p-mb-1"
              ></Button>
              <Button
                icon="pi pi-times"
                type="button"
                class="p-button-danger p-mb-1"
              ></Button>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <div class="p-col-12 p-lg-6">
      <div class="card">
        <Chart type="line" :data="lineData" />
      </div>
    </div>
  </div>
</template>

<script>
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import Checkbox from "primevue/checkbox";
import Panel from "primevue/panel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Chart from "primevue/chart";
import ProgressBar from "primevue/progressbar";

export default {
  components: {
    ProgressBar,
    Checkbox,
    Panel,
    Dropdown,
    InputText,
    Button,
    Column,
    DataTable,
    Chart,
  },
  data() {
    return {
      tasksCheckbox: [],
      dropdownCities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      dropdownCity: null,
      options: {
        defaultDate: "2019-01-01",
        header: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        editable: true,
      },
      events: null,
      products: null,
      selectedProducts: null,
      lineData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: "#2f4860",
            borderColor: "#2f4860",
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: "#00bb7e",
            borderColor: "#00bb7e",
          },
        ],
      },
    };
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.p-datatable).p-datatable-customers .p-datatable-thead > tr > th,
  ::v-deep(.p-datatable).p-datatable-customers .p-datatable-tfoot > tr > td {
    display: none !important;
  }
  ::v-deep(.p-datatable).p-datatable-customers .p-datatable-tbody > tr {
    border-bottom: 1px solid #dee2e6;
  }
  ::v-deep(.p-datatable).p-datatable-customers .p-datatable-tbody > tr > td {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 none !important;
    width: 100% !important;
    float: left;
    clear: left;
    border: 0 none;
  }
  ::v-deep(.p-datatable).p-datatable-customers
    .p-datatable-tbody
    > tr
    > td
    .p-column-title {
    padding: 0.4rem;
    min-width: 30%;
    display: inline-block;
    margin: -0.4rem 1rem -0.4rem -0.4rem;
    font-weight: bold;
  }
  ::v-deep(.p-datatable).p-datatable-customers
    .p-datatable-tbody
    > tr
    > td
    .p-progressbar {
    margin-top: 0.5rem;
  }
}
/* Menu Common */
/* Menu Light */
/* Menu Dark */
/* Topbar */
.card {
  background-color: #fff;
  padding: 1em;
  margin-bottom: 16px;
  border-radius: 3px;
}
.card.card-w-title {
  padding-bottom: 2em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 1rem 0;
  font-family: inherit;
  font-weight: normal;
  line-height: 1.2;
  color: inherit;
}
h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
  margin-top: 0;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
mark {
  background: #fff8e1;
  padding: 0.25rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}
blockquote {
  margin: 1rem 0;
  padding: 0 2rem;
  border-left: 4px solid #90a4ae;
}
hr {
  border-top: solid #e3e3e3;
  border-width: 1px 0 0 0;
  margin: 1rem 0;
}
p {
  margin: 0 0 1rem 0;
  line-height: 1.5;
}
p:last-child {
  margin-bottom: 0;
}
/* Code Highlight */
.docs pre[class*="language-"] {
  padding: 0 !important;
  background: transparent;
  overflow: visible;
}
.docs pre[class*="language-"] > code {
  border-left: 0 none;
  box-shadow: none !important;
  font-size: 14px;
}
/* Footer */
.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #edf0f5;
}
.dashboard .summary {
  position: relative;
}
.dashboard .summary .title {
  font-size: 20px;
}
.dashboard .summary .detail {
  color: #707070;
  display: block;
  margin-top: 10px;
}
.dashboard .summary .count {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  padding: 7px 14px;
  border-radius: 3px;
}
.dashboard .summary .count.visitors {
  background-color: #20d077;
}
.dashboard .summary .count.purchases {
  background-color: #f9c851;
}
.dashboard .summary .count.revenue {
  background-color: #007be5;
}
.dashboard .highlight-box {
  height: 100px;
  display: flex;
}
.dashboard .highlight-box:after {
  content: "";
  display: table;
  clear: both;
}
.dashboard .highlight-box .initials {
  height: 100%;
  width: 50%;
  text-align: center;
  padding: 1em;
}
.dashboard .highlight-box .initials > span {
  font-size: 48px;
}
.dashboard .highlight-box .highlight-details {
  height: 100%;
  background-color: #fff;
  width: 50%;
  padding: 1em;
}
.dashboard .highlight-box .highlight-details i {
  font-size: 18px;
  vertical-align: middle;
  margin-right: 0.5em;
}
.dashboard .highlight-box .highlight-details .count {
  color: #707070;
  font-size: 36px;
  margin-top: 4px;
  display: block;
}
.dashboard .task-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.dashboard .task-list li {
  padding: 0.5em 0.25em;
  border-bottom: 1px solid #e3e3e3;
}
.dashboard .task-list li:after {
  content: "";
  display: table;
  clear: both;
}
.dashboard .task-list .p-checkbox {
  vertical-align: middle;
  margin-right: 0.5em;
}
.dashboard .task-list .task-name {
  vertical-align: middle;
}
.dashboard .task-list i {
  float: right;
  font-size: 24px;
  color: #707070;
}
.dashboard .task-list .p-panel-content {
  min-height: 256px;
}
.dashboard .contact-form .p-panel-content {
  min-height: 256px;
}
.dashboard .contacts ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dashboard .contacts ul li {
  border-bottom: 1px solid #e3e3e3;
}
.dashboard .contacts ul li button {
  padding: 9px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  display: block;
  border-radius: 2px;
  transition: background-color 0.2s;
}
.dashboard .contacts ul li button .name {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18px;
}
.dashboard .contacts ul li button .email {
  position: absolute;
  right: 10px;
  top: 30px;
  font-size: 14px;
  color: #707070;
}
.dashboard .contacts ul li button:hover {
  cursor: pointer;
  background-color: #eee;
}
.dashboard .contacts ul li:last-child {
  border: 0;
}
.dashboard .contacts .p-panel-content {
  min-height: 256px;
}
.dashboard .activity-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dashboard .activity-list li {
  border-bottom: 1px solid #e3e3e3;
  padding: 16px 8px;
}
.dashboard .activity-list li .count {
  font-size: 24px;
  color: #fff;
  background-color: #007be5;
  font-weight: 700;
  padding: 0.25em 0.5em;
  display: inline-block;
  border-radius: 3px;
}
</style>
