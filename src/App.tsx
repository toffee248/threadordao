import * as React from "react";
import "./App.css";
import tableCell7 from "./assets/tableCell7.svg";
import tableCell from "./assets/tableCell.svg";
import arrowLeft from "./assets/arrowLeft.svg";
import frame3 from "./assets/frame3.svg";
import tableCell1 from "./assets/tableCell1.svg";
import Avatar from "./assets/Avatar.svg";
import arrowLeft1 from "./assets/arrowLeft1.svg";
import clipboard from "./assets/clipboard.svg";
import ellipse from "./assets/ellipse.svg";
import settings from "./assets/settings.svg";
import helpCircle from "./assets/helpCircle.svg";
import eye from "./assets/eye.svg";
import arrowRight from "./assets/arrowRight.svg";
import tableCell4 from "./assets/tableCell4.svg";
import tableCell6 from "./assets/tableCell6.svg";
import PieChart01 from "./assets/PieChart01.svg";
import HomeLine from "./assets/HomeLine.svg";
import frame from "./assets/frame.svg";
import arrowRight1 from "./assets/arrowRight1.svg";
import list from "./assets/list.svg";
import tableCell3 from "./assets/tableCell3.svg";
import tableCell5 from "./assets/tableCell5.svg";
import divider from "./assets/divider.svg";
import tableCell2 from "./assets/tableCell2.svg";
import NavItemBase from "./components/NavItemBase";
import ButtonGroup from "./components/ButtonGroup";
import AvatarLabelGroup from "./components/AvatarLabelGroup";
import PaginationNumberBase from "./components/PaginationNumberBase";
import NavItemBase1 from "./components/NavItemBase1";
import Button1 from "./components/Button1";
import TableHeader from "./components/TableHeader";
const App = () => {
  const propsData = {
    navItemBase: {
      homeLine: HomeLine,
      text: "Home",
    },
    navItemBase1: {
      text: "Tweets",
      settings: list,
    },
    navItemBase2: {
      text: "Threadors",
      settings: PieChart01,
    },
    navItemBase3: {
      settings: helpCircle,
      text: "Support",
    },
    navItemBase4: {
      text: "Settings",
      settings: settings,
    },
    avatarLabelGroup: {
      supportingText: "maks@tashkent.com",
      text: "Maks Tashkent",
      avatar: Avatar,
    },
    buttonGroup: {
      buttonGroupBase1: {
        text: "1 Day",
      },
      buttonGroupBase3: {
        text: "7 days",
      },
      buttonGroupBase5: {
        text: "1 Month",
      },
    },
    button: {
      placeholder: arrowLeft,
      text: "Previous",
    },
    paginationNumberBase: {
      number: "2",
    },
    paginationNumberBase1: {
      number: "3",
    },
    paginationNumberBase2: {
      number: "...",
    },
    paginationNumberBase3: {
      number: "1624",
    },
    paginationNumberBase4: {
      number: "1625",
    },
    paginationNumberBase5: {
      number: "1626",
    },
    button1: {
      arrowRight: arrowRight,
      text: "Next",
    },
    button2: {
      text: "Previous",
      placeholder: arrowLeft1,
    },
    paginationNumberBase6: {
      number: "2",
    },
    paginationNumberBase7: {
      number: "3",
    },
    paginationNumberBase8: {
      number: "...",
    },
    paginationNumberBase9: {
      number: "437",
    },
    paginationNumberBase10: {
      number: "438",
    },
    paginationNumberBase11: {
      number: "439",
    },
    button3: {
      text: "Next",
      arrowRight: arrowRight1,
    },
    tableHeader: {
      text: "tweet",
    },
    button4: {
      placeholder: arrowLeft1,
      text: "Previous",
    },
    paginationNumberBase12: {
      number: "2",
    },
    paginationNumberBase13: {
      number: "3",
    },
    paginationNumberBase14: {
      number: "...",
    },
    paginationNumberBase15: {
      number: "1624",
    },
    paginationNumberBase16: {
      number: "1625",
    },
    paginationNumberBase17: {
      number: "1626",
    },
    button5: {
      arrowRight: arrowRight1,
      text: "Next",
    },
  };
  return (
    <div className="frame-2999">
      <div className="sidebar-navigation">
        <img className="divider" src={divider} />
        <div className="content">
          <div className="flex-container">
            <img className="ellipse" src={ellipse} />
            <span className="logo">Logo</span>
            <img className="frame-3" src={frame3} />
          </div>
          <NavItemBase
            className="nav-item-base-instance-1"
            {...propsData.navItemBase}
          />
          <NavItemBase1
            className="nav-item-base-1-instance"
            {...propsData.navItemBase1}
          />
          <div className="flex-container-1">
            <img className="clipboard" src={clipboard} />
            <span className="text">Projects</span>
          </div>
          <div className="flex-container-2">
            <img className="eye" src={eye} />
            <span className="text-1">Narratives</span>
            <div className="frame-3028">soon</div>
          </div>
          <NavItemBase1
            className="nav-item-base-2-instance"
            {...propsData.navItemBase2}
          />
          <div className="flex-container-3">
            <img className="eye-1" src={eye} />
            <span className="text-2">Watchlist</span>
            <div className="frame-3028-1">soon</div>
          </div>
          <NavItemBase1
            className="nav-item-base-3-instance"
            {...propsData.navItemBase3}
          />
          <NavItemBase1
            className="nav-item-base-4-instance-1"
            {...propsData.navItemBase4}
          />
          <div className="account">
            <AvatarLabelGroup
              className="avatar-label-group-instance-1"
              {...propsData.avatarLabelGroup}
            />
          </div>
        </div>
      </div>
      <div className="flex-container-4">
        <div className="flex-container-5">
          <span>Welcome back, Maks</span>
          <ButtonGroup
            className="button-group-instance-1"
            {...propsData.buttonGroup}
          />
        </div>
        <div className="flex-container-6">
          <span>Tweets</span>
          <img className="frame" src={frame} />
        </div>
        <div className="frame-8">
          <div className="flex-container-7">
            <div className="table-header-cell">
              <span className="text-3">Tweet</span>
            </div>
            <div className="table-header-cell-1">
              <span className="text-4">Username</span>
            </div>
            <div className="table-header-cell-2">
              <span className="text-5">Reetweet_count</span>
            </div>
            <div className="table-header-cell-3">
              <span className="text-6">favorite_count</span>
            </div>
            <div className="table-header-cell-4">
              <span className="text-7">Date</span>
            </div>
            <div className="table-header-cell-5">
              <span className="text-8">Link</span>
            </div>
          </div>
          <div className="flex-container-8">
            <div className="table-cell">
              <span className="text-9">
                The crypto #AI narrative is a firestorm! 50x overvaluations in
                the next bull run are likely Research now and find the next AI
                $ETH OR $BTC 🧵16 AI projects that are on FIRE right now👇
                https:&#x2F;&#x2F;t.co&#x2F;d1cTWsLqiP
              </span>
            </div>
            <div className="table-cell-1">thehiddenmaze</div>
            <div className="table-cell-2">3</div>
            <div className="table-cell-3">16</div>
            <div className="table-cell-4">02.03. 2023, 17:08:24</div>
            <img className="table-cell-5" src={tableCell} />
          </div>
          <div className="flex-container-9">
            <div className="table-cell-6">
              Many of the best Layer 1 Blockchains for the upcoming cycle
              aren&#39;t public yet. They could 30–60x the next bull run. Right
              in front of you might be the next $SOL or $ADA 🧵Here are the top
              11 upcoming L0&#x2F;1 Blockchains I&#39;m most excited about
            </div>
            <div className="table-cell-7">thehiddenmaze</div>
            <div className="table-cell-8">3</div>
            <div className="table-cell-9">16</div>
            <div className="table-cell-10">02.03. 2023, 17:08:24</div>
            <img className="table-cell-1" src={tableCell1} />
          </div>
          <div className="flex-container-10">
            <div className="table-cell-11">
              <span className="text-10">
                2023 is a MASSIVE year for • ZKP • Rollups • Modular Knowing
                these narratives early can easily result in financial freedom if
                one does the work. 🧵👇Here is a breakdown of the narrative and
                20+ projects 👂Too busy to read? 👂⬇️ Listen to AI Chloe while
                browsing. https:&#x2F;&#x2F;t.co&#x2F;19buaWdd9S
              </span>
            </div>
            <div className="table-cell-12">thehiddenmaze</div>
            <div className="table-cell-13">3</div>
            <div className="table-cell-14">16</div>
            <div className="table-cell-15">02.03. 2023, 17:08:24</div>
            <img className="table-cell-2" src={tableCell2} />
          </div>
          <div className="flex-container-11">
            <Button1 className="button-instance" {...propsData.button} />
            <div className="pagination-number-base">1</div>
            <PaginationNumberBase
              className="pagination-number-base-instance"
              {...propsData.paginationNumberBase}
            />
            <PaginationNumberBase
              className="pagination-number-base-1-instance"
              {...propsData.paginationNumberBase1}
            />
            <PaginationNumberBase
              className="pagination-number-base-2-instance"
              {...propsData.paginationNumberBase2}
            />
            <PaginationNumberBase
              className="pagination-number-base-3-instance"
              {...propsData.paginationNumberBase3}
            />
            <PaginationNumberBase
              className="pagination-number-base-4-instance"
              {...propsData.paginationNumberBase4}
            />
            <PaginationNumberBase
              className="pagination-number-base-5-instance"
              {...propsData.paginationNumberBase5}
            />
            <Button1 className="button-1-instance" {...propsData.button1} />
          </div>
        </div>
        <div className="flex-container-12">
          <span className="text-11">Projects</span>
          <img className="frame-1" src={frame} />
          <span className="text-12">Narratives</span>
          <img className="frame-2" src={frame} />
        </div>
        <div className="flex-container-13">
          <div className="frame-8-1">
            <div className="flex-container-14">
              <div className="table-header-cell-6">Account</div>
              <div className="table-header-cell-7">
                <span className="text-13">Distinct...</span>
              </div>
              <div className="table-header-cell-8">
                <span className="text-14">Total ...</span>
              </div>
              <div className="table-header-cell-9">
                <span className="text-15">favorite...</span>
              </div>
              <div className="table-header-cell-10">
                <span className="text-16">retweet...</span>
              </div>
              <div className="table-header-cell-11">
                <span className="text-17">Record ...</span>
              </div>
            </div>
            <div className="flex-container-15">
              <div className="table-cell-16">1...blackbird_xyz</div>
              <div className="table-cell-17">1</div>
              <div className="table-cell-18">1</div>
              <div className="table-cell-19">1</div>
              <div className="table-cell-20">0</div>
              <div className="table-cell-21">0</div>
            </div>
            <div className="flex-container-16">
              <div className="table-cell-22">2...binance_vie...</div>
              <div className="table-cell-23">1</div>
              <div className="table-cell-24">1</div>
              <div className="table-cell-25">1</div>
              <div className="table-cell-26">0</div>
              <div className="table-cell-27">0</div>
            </div>
            <div className="flex-container-17">
              <div className="table-cell-28">
                <span className="text-18">3...gabusch</span>
              </div>
              <div className="table-cell-29">1</div>
              <div className="table-cell-30">1</div>
              <div className="table-cell-31">1</div>
              <div className="table-cell-32">0</div>
              <div className="table-cell-33">0</div>
            </div>
            <div className="flex-container-18">
              <div className="table-cell-34">
                <span className="text-19">4...playtoearn_</span>
              </div>
              <div className="table-cell-35">1</div>
              <div className="table-cell-36">1</div>
              <div className="table-cell-37">1</div>
              <div className="table-cell-38">0</div>
              <div className="table-cell-39">0</div>
            </div>
            <div className="flex-container-19">
              <div className="table-cell-40">5...BGameAlliance</div>
              <div className="table-cell-41">1</div>
              <div className="table-cell-42">1</div>
              <div className="table-cell-43">1</div>
              <div className="table-cell-44">0</div>
              <div className="table-cell-45">0</div>
            </div>
            <div className="flex-container-20">
              <div className="table-cell-46">6...Blockchain...</div>
              <div className="table-cell-47">1</div>
              <div className="table-cell-48">1</div>
              <div className="table-cell-49">1</div>
              <div className="table-cell-50">0</div>
              <div className="table-cell-51">0</div>
            </div>
            <div className="flex-container-21">
              <Button1 className="button-2-instance" {...propsData.button2} />
              <div className="pagination-number-base-1">1</div>
              <PaginationNumberBase
                className="pagination-number-base-6-instance"
                {...propsData.paginationNumberBase6}
              />
              <PaginationNumberBase
                className="pagination-number-base-7-instance"
                {...propsData.paginationNumberBase7}
              />
              <PaginationNumberBase
                className="pagination-number-base-8-instance"
                {...propsData.paginationNumberBase8}
              />
              <PaginationNumberBase
                className="pagination-number-base-9-instance"
                {...propsData.paginationNumberBase9}
              />
              <PaginationNumberBase
                className="pagination-number-base-10-instance"
                {...propsData.paginationNumberBase10}
              />
              <PaginationNumberBase
                className="pagination-number-base-11-instance"
                {...propsData.paginationNumberBase11}
              />
              <Button1 className="button-3-instance" {...propsData.button3} />
            </div>
          </div>
          <div className="frame-8-2">
            <div className="flex-container-22">
              <div className="table-header-cell-12">
                <TableHeader
                  className="table-header-instance-1"
                  {...propsData.tableHeader}
                />
              </div>
              <div className="table-header-cell-13">
                <span className="text-20">username</span>
              </div>
              <div className="table-header-cell-14">
                <span className="text-21">Reetweet...</span>
              </div>
              <div className="table-header-cell-15">
                <span className="text-22">favorite...</span>
              </div>
              <div className="table-header-cell-16">
                <span className="text-23">link</span>
              </div>
            </div>
            <div className="flex-container-23">
              <div className="table-cell-52">
                The crypto #AI narrative is a ...
              </div>
              <div className="table-cell-53">
                <span className="text-24">thehiddenmaze</span>
              </div>
              <div className="table-cell-54">
                <span className="text-25">354</span>
              </div>
              <div className="table-cell-55">
                <span className="text-26">909</span>
              </div>
              <img className="table-cell-3" src={tableCell3} />
            </div>
            <div className="flex-container-24">
              <div className="table-cell-56">
                Many of the best Layer 1 Blockchains{" "}
              </div>
              <div className="table-cell-57">thehiddenmaze</div>
              <div className="table-cell-58">328</div>
              <div className="table-cell-59">998</div>
              <img className="table-cell-4" src={tableCell4} />
            </div>
            <div className="flex-container-25">
              <div className="table-cell-60">2023 is a MASSIVE year for</div>
              <div className="table-cell-61">thehiddenmaze</div>
              <div className="table-cell-62">328</div>
              <div className="table-cell-63">998</div>
              <img className="table-cell-5" src={tableCell5} />
            </div>
            <div className="flex-container-26">
              <div className="table-cell-64">
                Many of the best Layer 1 Blockchains{" "}
              </div>
              <div className="table-cell-65">thehiddenmaze</div>
              <div className="table-cell-66">328</div>
              <div className="table-cell-67">998</div>
              <img className="table-cell-6" src={tableCell6} />
            </div>
            <div className="flex-container-27">
              <div className="table-cell-68">Many of the best... </div>
              <div className="table-cell-69">thehiddenmaze</div>
              <div className="table-cell-70">328</div>
              <div className="table-cell-71">998</div>
              <img className="table-cell-7" src={tableCell7} />
            </div>
            <div className="flex-container-28">
              <Button1 className="button-4-instance" {...propsData.button4} />
              <div className="pagination-number-base-2">1</div>
              <PaginationNumberBase
                className="pagination-number-base-12-instance"
                {...propsData.paginationNumberBase12}
              />
              <PaginationNumberBase
                className="pagination-number-base-13-instance"
                {...propsData.paginationNumberBase13}
              />
              <PaginationNumberBase
                className="pagination-number-base-14-instance"
                {...propsData.paginationNumberBase14}
              />
              <PaginationNumberBase
                className="pagination-number-base-15-instance"
                {...propsData.paginationNumberBase15}
              />
              <PaginationNumberBase
                className="pagination-number-base-16-instance"
                {...propsData.paginationNumberBase16}
              />
              <PaginationNumberBase
                className="pagination-number-base-17-instance-1"
                {...propsData.paginationNumberBase17}
              />
              <Button1 className="button-5-instance-1" {...propsData.button5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
