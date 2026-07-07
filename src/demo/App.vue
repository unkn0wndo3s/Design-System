<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Button from '../components/Button/Button.vue';
import Badge from '../components/Badge/Badge.vue';
import Avatar from '../components/Avatar/Avatar.vue';
import Toggle from '../components/Toggle/Toggle.vue';
import Checkbox from '../components/Checkbox/Checkbox.vue';
import Radio from '../components/Radio/Radio.vue';
import TextField from '../components/textField/TextField.vue';
import Select from '../components/Select/Select.vue';
import SelectOption from '../components/Select/SelectOption.vue';
import NumericStepper from '../components/numericStepper/NumericStepper.vue';
import Tab from '../components/Tabs/Tab.vue';
import TabItem from '../components/Tabs/TabItem.vue';
import TabContent from '../components/Tabs/TabContent.vue';
import Link from '../components/Link/Link.vue';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '../components/Breadcrumb/BreadcrumbItem.vue';
import Pagination from '../components/pagination/Pagination.vue';
import PaginationNumber from '../components/pagination/PaginationNumber.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
import SidebarItem from '../components/Sidebar/SidebarItem.vue';
import Card from '../components/Card/Card.vue';
import ListItem from '../components/ListItem/ListItem.vue';
import ListItemTitle from '../components/ListItem/ListItemTitle.vue';
import ListItemSubtitle from '../components/ListItem/ListItemSubtitle.vue';
import Notification from '../components/Notifications/Notification.vue';
import LoadingBar from '../components/LoadingBar/LoadingBar.vue';
import Tooltip from '../components/Tooltip/Tooltip.vue';
import Modal from '../components/Modal/Modal.vue';

import {
  Plus,
  Shield,
  ListFilter,
  Download,
  Ellipsis,
  LayoutGrid,
  ChartLine,
  Settings,
} from 'lucide-vue-next';
import NavbarLink from '../components/Navbar/NavbarLink.vue';

// ── Données des variantes ──
const tones = ['primary', 'neutral', 'success', 'warning', 'error', 'info'] as const;
const btnTypes = ['primary', 'secondary', 'ghost', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
const notifTypes = ['info', 'success', 'warning', 'error'] as const;
const notifMessages: Record<string, string> = {
  info: 'Information about the operation.',
  success: 'The operation completed successfully.',
  warning: 'A warning occurred. Please check the details.',
  error: 'An error occurred. Please try again.',
};
const tooltipPositions = ['top', 'bottom', 'left', 'right'] as const;

const tokenColors = [
  'text', 'neutral', 'background', 'surface', 'surface-2', 'border',
  'primary', 'secondary', 'accent', 'primary-soft',
  'success-medium', 'warning-medium', 'error-medium', 'info-medium',
];
const spacingScale = [
  ['3xs', '2'], ['2xs', '4'], ['xs', '8'], ['sm', '12'], ['md', '16'],
  ['lg', '24'], ['xl', '32'], ['2xl', '48'], ['3xl', '64'],
] as const;
const radiusScale = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
const railLinks = [
  ['#foundations', 'Foundations'],
  ['#buttons', 'Button'],
  ['#badges', 'Badge'],
  ['#controls', 'Toggle · Check · Radio'],
  ['#textfield', 'TextField'],
  ['#select', 'Select'],
  ['#stepper', 'Numeric stepper'],
  ['#avatar', 'Avatar'],
  ['#loading', 'Loading bar'],
  ['#listitem', 'List item'],
  ['#link', 'Link'],
  ['#tabs', 'Tabs'],
  ['#breadcrumb', 'Breadcrumb'],
  ['#pagination', 'Pagination'],
  ['#notification', 'Notification'],
  ['#tooltip', 'Tooltip'],
  ['#card', 'Card'],
  ['#chrome', 'Navbar · Sidebar'],
  ['#modal', 'Modal'],
] as const;

// ── État interactif (v-model partout) ──
const toggleOff = ref(false);
const toggleOn = ref(true);
const cbUnchecked = ref(false);
const cbChecked = ref(true);
const cbDisabled = ref(true);
const plan = ref('on-demand');
const serviceName = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const selected = ref('option3');
const quantity = ref(5);
const activeTab = ref('images');
const currentPage = ref(3);
const modalOpen = ref(false);

// ── Thème persistant ──
const THEME_KEY = 'nova-theme';
const theme = ref<'light' | 'dark'>('light');

function applyTheme(next: 'light' | 'dark') {
  theme.value = next;
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark');
}

onMounted(() => {
  const saved = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null;
  if (saved) applyTheme(saved);
});

// ── Navigation fluide du rail ──
function scrollToSection(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}
</script>

<template>
  <div class="g-page">
    <header class="g-topbar">
      <div class="g-brand">
        <span class="g-mark"></span>
        <span class="g-name">Nova Design System</span>
        <Badge type="primary" variant="soft">Vue 1.0.0</Badge>
      </div>
      <Button type="secondary" size="sm" @click="toggleTheme">Toggle theme</Button>
    </header>

    <div class="g-layout">
      <nav class="g-rail">
        <p class="g-rail__head">Nova DS</p>
        <a
          v-for="[hash, label] in railLinks"
          :key="hash"
          :href="hash"
          @click.prevent="scrollToSection(hash)"
        >
          {{ label }}
        </a>
      </nav>

      <main class="g-content">
        <!-- ── FOUNDATIONS ── -->
        <section id="foundations" class="blk">
          <h2>Foundations</h2>
          <p class="blk__desc">Design tokens — type, color, spacing, radius, elevation.</p>

          <div class="vg">
            <span class="vg__lbl">Type scale — Intel One Mono (display) · Geist (UI)</span>
            <div class="vg__body type-scale">
              <div class="type-row">
                <span class="type-tag">text-5xl</span><span class="disp t5xl">Nova 52px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-4xl</span><span class="disp t4xl">Nova 40px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-3xl</span><span class="disp t3xl">Nova 30px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-2xl</span><span class="disp t2xl">Nova 22px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-xl</span><span class="disp txl">Nova 18px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-lg</span><span class="sans tlg">Nova 16px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-base</span><span class="sans tbase">Nova 14px</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-label</span><span class="sans tlabel">Nova 13px 600</span>
              </div>
              <div class="type-row">
                <span class="type-tag">text-sm</span><span class="sans tsm">Nova 12px</span>
              </div>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Color tokens (adapt to theme)</span>
            <div class="vg__body swatch-row">
              <div v-for="t in tokenColors" :key="t" class="swatch">
                <div class="swatch-chip" :style="{ background: `var(--nds-${t})` }" />
                <span class="swatch-name">{{ t }}</span>
              </div>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Spacing scale</span>
            <div class="vg__body" style="flex-direction: column; align-items: flex-start; gap: 8px">
              <div v-for="[n, px] in spacingScale" :key="n" class="sp-row">
                <span class="sp-label">spacing-{{ n }} · {{ px }}px</span>
                <div class="sp-bar" :style="{ width: `${px}px` }" />
              </div>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Radius scale</span>
            <div class="vg__body">
              <div
                v-for="n in radiusScale"
                :key="n"
                class="rad-chip"
                :style="{ borderRadius: `var(--nds-radius-${n})` }"
              >
                <span>{{ n }}</span>
              </div>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Elevation</span>
            <div class="vg__body">
              <div
                v-for="n in ['sm', 'md', 'lg']"
                :key="n"
                class="elev-chip"
                :style="{ boxShadow: `var(--nds-shadow-${n})` }"
              >
                shadow-{{ n }}
              </div>
            </div>
          </div>
        </section>

        <!-- ── BUTTON ── -->
        <section id="buttons" class="blk">
          <h2>Button</h2>
          <p class="blk__desc">Variants, sizes, icon and disabled states.</p>

          <div class="vg">
            <span class="vg__lbl">Variants × md</span>
            <div class="vg__body">
              <Button v-for="t in btnTypes" :key="t" :type="t" size="md">
                {{ capitalize(t) }}
              </Button>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Sizes (primary)</span>
            <div class="vg__body">
              <Button v-for="s in sizes" :key="s" type="primary" :size="s">Size {{ s }}</Button>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">With icon · icon-only</span>
            <div class="vg__body">
              <Button type="primary" size="md">
                <template #icon-left><Plus :size="16" /></template>
                New service
              </Button>
              <Button type="secondary" size="md">
                Filter
                <template #icon-right><ListFilter :size="16" /></template>
              </Button>
              <Button type="ghost" size="md" :icon="true"><Ellipsis :size="18" /></Button>
              <Button type="primary" size="md" :icon="true"><Download :size="18" /></Button>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Disabled</span>
            <div class="vg__body">
              <Button v-for="t in btnTypes" :key="t" :type="t" size="md" disabled>
                {{ t }}
              </Button>
            </div>
          </div>
        </section>

        <!-- ── BADGE ── -->
        <section id="badges" class="blk">
          <h2>Badge</h2>
          <p class="blk__desc">Tones × soft / solid.</p>

          <div class="vg">
            <span class="vg__lbl">Soft</span>
            <div class="vg__body">
              <Badge v-for="t in tones" :key="t" :type="t" variant="soft">{{ t }}</Badge>
            </div>
          </div>
          <div class="vg">
            <span class="vg__lbl">Solid</span>
            <div class="vg__body">
              <Badge v-for="t in tones" :key="t" :type="t" variant="solid">{{ t }}</Badge>
            </div>
          </div>
        </section>

        <!-- ── CONTROLS ── -->
        <section id="controls" class="blk">
          <h2>Toggle · Checkbox · Radio</h2>
          <p class="blk__desc">Selection controls in every state.</p>

          <div class="vg">
            <span class="vg__lbl">Toggle — off / on</span>
            <div class="vg__body">
              <Toggle id="tg-off" v-model="toggleOff" />
              <Toggle id="tg-on" v-model="toggleOn" />
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Checkbox — unchecked / checked / disabled</span>
            <div class="vg__body">
              <Checkbox id="cb1" v-model="cbUnchecked">Unchecked</Checkbox>
              <Checkbox id="cb2" v-model="cbChecked">Checked</Checkbox>
              <Checkbox id="cb3" v-model="cbDisabled" disabled>Disabled</Checkbox>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Radio group</span>
            <div class="vg__body" style="flex-direction: column; align-items: flex-start">
              <Radio id="rb1" name="plan" value="on-demand" v-model="plan">On-demand</Radio>
              <Radio id="rb2" name="plan" value="reserved" v-model="plan">Reserved</Radio>
              <Radio id="rb3" name="plan" value="spot" v-model="plan" disabled>Spot</Radio>
            </div>
          </div>
        </section>

        <!-- ── TEXTFIELD ── -->
        <section id="textfield" class="blk">
          <h2>TextField</h2>
          <p class="blk__desc">Text, email, password, textarea.</p>

          <div class="vg">
            <span class="vg__lbl">Fields</span>
            <div class="vg__body" style="flex-direction: column; align-items: stretch; max-width: 380px">
              <TextField id="tf-name" label="Service name" placeholder="api-gateway" v-model="serviceName" />
              <TextField id="tf-email" label="Email" type="email" placeholder="you@nova.dev" v-model="email" />
              <TextField id="tf-pass" label="Password" type="password" placeholder="••••••••" v-model="password" />
              <TextField id="tf-msg" label="Message" type="textarea" placeholder="Type here…" :max="120" v-model="message" />
            </div>
          </div>
        </section>

        <!-- ── SELECT ── -->
        <section id="select" class="blk">
          <h2>Select</h2>
          <p class="blk__desc">Default and disabled.</p>

          <div class="vg">
            <span class="vg__lbl">Select — sélection : {{ selected }}</span>
            <div class="vg__body">
              <Select v-model="selected">
                <SelectOption value="option1">Option 1</SelectOption>
                <SelectOption value="option2">Option 2</SelectOption>
                <SelectOption value="option3">Option 3</SelectOption>
                <SelectOption value="option4">Option 4</SelectOption>
                <SelectOption value="option5" disabled>Option 5</SelectOption>
              </Select>
              <Select disabled>
                <SelectOption value="d">Disabled</SelectOption>
              </Select>
            </div>
          </div>
        </section>

        <!-- ── NUMERIC STEPPER ── -->
        <section id="stepper" class="blk">
          <h2>Numeric stepper</h2>
          <p class="blk__desc">Increment / decrement control.</p>

          <div class="vg">
            <span class="vg__lbl">Stepper — valeur : {{ quantity }}</span>
            <div class="vg__body">
              <NumericStepper id="ns1" v-model="quantity" :min="-15" :max="10" :step="5" />
            </div>
          </div>
        </section>

        <!-- ── AVATAR ── -->
        <section id="avatar" class="blk">
          <h2>Avatar</h2>
          <p class="blk__desc">Photo and initials.</p>

          <div class="vg">
            <span class="vg__lbl">Types</span>
            <div class="vg__body">
              <Avatar type="photo" name="John Doe" image="https://i.pravatar.cc/80?img=12" />
              <Avatar type="initials" name="Ava Stone" />
              <Avatar type="initials" name="Jane Smith" />
              <!-- URL cassée volontairement : montre le fallback @error -->
              <Avatar type="photo" name="Bob Johnson" image="https://i.pravatarc/80?img=12" />
            </div>
          </div>
        </section>

        <!-- ── LOADING BAR ── -->
        <section id="loading" class="blk">
          <h2>Loading bar</h2>
          <p class="blk__desc">Determinate and indeterminate.</p>

          <div class="vg">
            <span class="vg__lbl">Known 75% · indeterminate</span>
            <div class="vg__body" style="flex-direction: column; align-items: stretch; width: 100%">
              <LoadingBar type="known" :percentage="75" width="100%" />
              <LoadingBar type="unknown" width="100%" />
            </div>
          </div>
        </section>

        <!-- ── LIST ITEM ── -->
        <section id="listitem" class="blk">
          <h2>List item</h2>
          <p class="blk__desc">Title and subtitle rows.</p>

          <div class="vg">
            <span class="vg__lbl">List</span>
            <div class="vg__body" style="flex-direction: column; align-items: stretch; padding: 0; gap: 0">
              <ListItem>
                <ListItemTitle>api-gateway</ListItemTitle>
                <ListItemSubtitle>Edge routing · eu-west-1</ListItemSubtitle>
              </ListItem>
              <ListItem>
                <ListItemTitle>postgres-main</ListItemTitle>
                <ListItemSubtitle>Database · eu-west-1</ListItemSubtitle>
              </ListItem>
              <ListItem>
                <ListItemTitle>redis-cache</ListItemTitle>
                <ListItemSubtitle>Cache · eu-west-1</ListItemSubtitle>
              </ListItem>
            </div>
          </div>
        </section>

        <!-- ── LINK ── -->
        <section id="link" class="blk">
          <h2>Link</h2>
          <p class="blk__desc">Inline and external.</p>

          <div class="vg">
            <span class="vg__lbl">Links</span>
            <div class="vg__body">
              <Link url="https://example.com">Documentation</Link>
              <Link url="https://example.com" :blank="true">Open dashboard ↗</Link>
            </div>
          </div>
        </section>

        <!-- ── TABS ── -->
        <section id="tabs" class="blk">
          <h2>Tabs</h2>
          <p class="blk__desc">Underline tabs with panels (interactive).</p>

          <div class="vg">
            <span class="vg__lbl">Tabs + content — actif : {{ activeTab }}</span>
            <div class="vg__body" style="flex-direction: column; align-items: stretch">
              <Tab id="g-tab" v-model:active="activeTab">
                <TabItem id="images">Images</TabItem>
                <TabItem id="videos">Videos</TabItem>
                <TabItem id="docs">Documents</TabItem>

                <TabContent item-id="images"><p>🖼️ Image gallery content.</p></TabContent>
                <TabContent item-id="videos"><p>🎬 Video player here.</p></TabContent>
                <TabContent item-id="docs"><p>📄 Document list here.</p></TabContent>
              </Tab>
            </div>
          </div>
        </section>

        <!-- ── BREADCRUMB ── -->
        <section id="breadcrumb" class="blk">
          <h2>Breadcrumb</h2>
          <p class="blk__desc">Hierarchical navigation.</p>

          <div class="vg">
            <span class="vg__lbl">Breadcrumb</span>
            <div class="vg__body">
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/services">Services</BreadcrumbItem>
                <BreadcrumbItem current>api-gateway</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </section>

        <!-- ── PAGINATION ── -->
        <section id="pagination" class="blk">
          <h2>Pagination</h2>
          <p class="blk__desc">Page numbers with disabled edges.</p>

          <div class="vg">
            <span class="vg__lbl">Pagination — page : {{ currentPage }}</span>
            <div class="vg__body">
              <Pagination v-model="currentPage">
                <PaginationNumber :page="1" />
                <PaginationNumber :page="2" />
                <PaginationNumber :page="3" />
                <PaginationNumber :page="4" />
                <PaginationNumber :page="5" disabled />
              </Pagination>
            </div>
          </div>
        </section>

        <!-- ── NOTIFICATION ── -->
        <section id="notification" class="blk">
          <h2>Notification</h2>
          <p class="blk__desc">Info, success, warning and error.</p>

          <div class="vg">
            <span class="vg__lbl">All types</span>
            <div class="vg__body" style="flex-direction: column; align-items: stretch; max-width: 460px">
              <Notification v-for="t in notifTypes" :key="t" :type="t">
                {{ notifMessages[t] }}
              </Notification>
            </div>
          </div>
        </section>

        <!-- ── TOOLTIP ── -->
        <section id="tooltip" class="blk">
          <h2>Tooltip</h2>
          <p class="blk__desc">Four positions — hover the buttons.</p>

          <div class="vg">
            <span class="vg__lbl">Positions</span>
            <div class="vg__body">
              <Tooltip v-for="pos in tooltipPositions" :key="pos" :label="`Tooltip ${pos}`" :position="pos">
                <Button type="secondary" size="md">{{ capitalize(pos) }}</Button>
              </Tooltip>
            </div>
          </div>
        </section>

        <!-- ── CARD ── -->
        <section id="card" class="blk">
          <h2>Card</h2>
          <p class="blk__desc">With cover, plain and with footer actions.</p>

          <div class="vg">
            <span class="vg__lbl">Cover · plain · with footer</span>
            <div class="vg__body" style="align-items: flex-start">
              <Card title="api-gateway" subtitle="Edge routing · 99.98% uptime" cover="/peak.jpg">
                <template #footer>
                  <Badge type="success" variant="soft">Live</Badge>
                </template>
              </Card>
              <Card title="Quick note" subtitle="A plain card without a cover image." />
              <Card title="Deploy" subtitle="Ship build 4821 to production.">
                <template #footer>
                  <div style="display: flex; gap: 8px">
                    <Button type="ghost" size="sm">Cancel</Button>
                    <Button type="primary" size="sm">Deploy</Button>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </section>

        <!-- ── APP CHROME ── -->
        <section id="chrome" class="blk">
          <h2>Navbar · Sidebar</h2>
          <p class="blk__desc">App chrome.</p>

          <div class="vg">
            <span class="vg__lbl">Navbar</span>
            <div class="vg__body" style="align-items: stretch; padding: 0">
              <Navbar brand="Nova">
                <NavbarLink class="navbar__link navbar__link--active" href="#1">Services</NavbarLink>
                <NavbarLink href="#2">Incidents</NavbarLink>
                <NavbarLink href="#3">Settings</NavbarLink>
                <template #right>
                  <Avatar type="initials" name="Ava Stone" />
                </template>
              </Navbar>
            </div>
          </div>

          <div class="vg">
            <span class="vg__lbl">Sidebar</span>
            <div class="vg__body">
              <Sidebar header="Nova">
                <SidebarItem href="#" active>
                  <template #icon><LayoutGrid :size="18" /></template>
                  Overview
                </SidebarItem>
                <SidebarItem href="#">
                  <template #icon><ChartLine :size="18" /></template>
                  Metrics
                </SidebarItem>
                <SidebarItem href="#">
                  <template #icon><Shield :size="18" /></template>
                  Security
                </SidebarItem>
                <SidebarItem href="#">
                  <template #icon><Settings :size="18" /></template>
                  Settings
                </SidebarItem>
              </Sidebar>
            </div>
          </div>
        </section>

        <!-- ── MODAL ── -->
        <section id="modal" class="blk">
          <h2>Modal</h2>
          <p class="blk__desc">Overlay dialog — click to open, Escape or overlay to close.</p>

          <div class="vg">
            <span class="vg__lbl">Dialog</span>
            <div class="vg__body">
              <Button type="primary" size="md" @click="modalOpen = true">Open modal</Button>
            </div>
          </div>

          <Modal id="gallery-modal" v-model:open="modalOpen" title="Confirm deploy">
            Ship build 4821 to production? This rolls out to all edge regions.
            <template #footer>
              <Button type="ghost" size="md" @click="modalOpen = false">Cancel</Button>
              <Button type="primary" size="md" @click="modalOpen = false">Deploy</Button>
            </template>
          </Modal>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/tokens/typography' as *;

.g-page {
  min-height: 100vh;
  background-color: var(--nds-background);
  color: var(--nds-text);
}

// ── Topbar ──
.g-topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--nds-spacing-md);
  padding: 12px var(--nds-spacing-lg);
  border-bottom: var(--nds-border-width-thin) solid var(--nds-border);
  background: color-mix(in srgb, var(--nds-background) 85%, transparent);
  backdrop-filter: blur(10px);
}
.g-brand {
  display: flex;
  align-items: center;
  gap: var(--nds-spacing-xs);
}
.g-mark {
  width: 26px;
  height: 26px;
  border-radius: var(--nds-radius-md);
  background: linear-gradient(135deg, var(--nds-primary), var(--nds-accent));
}
.g-name {
  @include text-xl;
}

// ── Layout ──
.g-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
}

// ── Rail ──
.g-rail {
  position: sticky;
  top: 53px;
  align-self: start;
  height: calc(100vh - 53px);
  overflow-y: auto;
  padding: var(--nds-spacing-md) var(--nds-spacing-sm);
  border-right: var(--nds-border-width-thin) solid var(--nds-border);
  background: var(--nds-surface);
  &__head {
    @include text-label;
    color: var(--nds-text);
    padding: var(--nds-spacing-xs) var(--nds-spacing-xs) var(--nds-spacing-md);
    margin: 0;
  }
  a {
    display: block;
    padding: 5px var(--nds-spacing-xs);
    border-radius: var(--nds-radius-sm);
    color: var(--nds-neutral);
    text-decoration: none;
    @include text-sm;
    transition:
      background-color 120ms ease,
      color 120ms ease;
    &:hover {
      background: var(--nds-surface-hover);
      color: var(--nds-text);
    }
  }
}

// ── Content ──
.g-content {
  padding: var(--nds-spacing-2xl) var(--nds-spacing-2xl) var(--nds-spacing-3xl);
  max-width: 880px;
}

// ── Block ──
.blk {
  margin-bottom: var(--nds-spacing-2xl);
  scroll-margin-top: var(--nds-spacing-lg);
  > h2 {
    @include text-2xl;
    margin: 0 0 var(--nds-spacing-3xs);
  }
  &__desc {
    @include text-base;
    color: var(--nds-neutral);
    margin: 0 0 var(--nds-spacing-lg);
  }
}

// ── Variant group ──
.vg {
  border: var(--nds-border-width-thin) solid var(--nds-border);
  border-radius: var(--nds-radius-lg);
  overflow: hidden;
  background: var(--nds-surface);
  & + & {
    margin-top: var(--nds-spacing-md);
  }

  &__lbl {
    display: block;
    @include text-sm;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--nds-neutral);
    padding: var(--nds-spacing-xs) var(--nds-spacing-md);
    border-bottom: var(--nds-border-width-thin) solid var(--nds-border);
    background: color-mix(in srgb, var(--nds-text) 2.5%, var(--nds-surface));
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--nds-spacing-md);
    padding: var(--nds-spacing-lg) var(--nds-spacing-md);
  }
}

// ── Foundations specimens ──
.type-scale {
  flex-direction: column;
  align-items: stretch;
  padding: 0 !important;
  gap: 0 !important;
}
.type-row {
  display: flex;
  align-items: baseline;
  gap: var(--nds-spacing-md);
  padding: var(--nds-spacing-sm) var(--nds-spacing-md);
  border-bottom: var(--nds-border-width-thin) solid var(--nds-border);
  &:last-child {
    border-bottom: none;
  }
}
.type-tag {
  @include text-sm;
  font-family: var(--nds-font-mono);
  color: var(--nds-neutral);
  width: 80px;
  flex-shrink: 0;
}
.disp {
  font-family: var(--nds-font-mono);
  font-weight: 700;
}
.sans {
  font-family: var(--nds-font-sans);
}
.t5xl { font-size: 52px; }
.t4xl { font-size: 40px; }
.t3xl { font-size: 30px; }
.t2xl { font-size: 22px; }
.txl { font-size: 18px; }
.tlg { font-size: 16px; font-weight: 600; }
.tbase { font-size: 14px; }
.tlabel { font-size: 13px; font-weight: 600; }
.tsm { font-size: 12px; }

.swatch-row {
  gap: var(--nds-spacing-sm) !important;
  flex-wrap: wrap;
}
.swatch {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.swatch-chip {
  width: 80px;
  height: 44px;
  border-radius: var(--nds-radius-md);
  border: var(--nds-border-width-thin) solid var(--nds-border);
}
.swatch-name {
  @include text-sm;
  color: var(--nds-neutral);
  font-family: var(--nds-font-mono);
}

.sp-row {
  display: flex;
  align-items: center;
  gap: var(--nds-spacing-md);
}
.sp-label {
  @include text-sm;
  color: var(--nds-neutral);
  font-family: var(--nds-font-mono);
  width: 160px;
  flex-shrink: 0;
}
.sp-bar {
  height: 14px;
  background: var(--nds-primary);
  border-radius: 2px;
}

.rad-chip {
  width: 72px;
  height: 72px;
  background: var(--nds-primary-soft);
  border: var(--nds-border-width-thin) solid var(--nds-primary);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 6px;
  span {
    @include text-sm;
    color: var(--nds-primary);
  }
}
.elev-chip {
  width: 130px;
  height: 72px;
  background: var(--nds-surface);
  border: var(--nds-border-width-thin) solid var(--nds-border);
  border-radius: var(--nds-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  @include text-sm;
  color: var(--nds-neutral);
  font-family: var(--nds-font-mono);
}
</style>

<style lang="scss">
// Non scopé : reset body comme dans le Layout Astro
body {
  margin: 0;
}
</style>