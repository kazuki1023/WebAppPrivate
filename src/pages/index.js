import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <img src="../img/logo.svg" alt="" />
        </div>
        <div className="header_week">
          <li className="header_week_4th">4th week</li>
        </div>
        <div className="header_record">
          <button id="header_record_button">記録・投稿</button>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="hours_container">
            <div className="hours">
              <ul id="today_hours">
                <li className="hours_title" id="today_title" name="today"></li>
                <li className="hours_count"></li>
                <li className="hours_hour">hour</li>
              </ul>
              <ul className="month_hours">
                <li className="hours_title" id="month_title"></li>
                <li className="hours_count"></li>
                <li className="hours_hour">hour</li>
              </ul>
              <ul className="total_hours">
                <li className="hours_title">総計</li>
                <li className="hours_count"></li>
                <li className="hours_hour">hour</li>
              </ul>
            </div>
            <div className="canvas_container" id="hours_chart"></div>
          </div>
          <div className="learning">
            <div className="learning_character">
              <p className="learning_title">学習言語</p>
              <div className="character_chart">
                <div id="learning_character_chart"></div>
                <ul className="learning_character_detail">
                  <li className="circle circle_js">JavaScript</li>
                  <li className="circle circle_css">CSS</li>
                  <li className="circle circle_php">PHP</li>
                  <li className="circle circle_html">HTML</li>
                  <li className="circle circle_laravel">Laravel</li>
                  <li className="circle circle_sql">SQL</li>
                  <li className="circle circle_shell">Shell</li>
                  <li className="circle circle_others">
                    情報システム基礎情報(その他)
                  </li>
                </ul>
              </div>
            </div>
            <div className="learning_content">
              <p className="learning_title">学習コンテンツ</p>
              <div id="learning_content_chart"></div>
              <ul className="learning_content_detail">
                <li className="circle circle_dot">ドットインストール</li>
                <li className="circle circle_N_cramSchool">N予備校</li>
                <li className="circle circle_posse">Posse課題</li>
              </ul>
            </div>
          </div>
        </div>
        <form className="date" action="./admin/form.php" method="POST">
          <button className="date_button" type="submit" name="before_month">
            <div className="arrow arrow-left"></div>
          </button>
          <div id="date_detail"></div>
          <button className="date_button" type="submit" name="after_month">
            <div className="arrow arrow-right"></div>
          </button>
        </form>
        <div className="footer_record">
          <button id="footer_record_button">記録・投稿</button>
        </div>
        <div className="modal">
          <form action="./admin/form.php" method="post" id="form_record">
            <div className="modal_content">
              <button className="modal_close">
                <span className="batsu"></span>
              </button>
              <div className="modal_detail">
                <div className="modal_detail_left">
                  <div className="modal_learning_day">
                    <div className="modal_learning_day_detail">
                      <p className="learning_day_title">学習日</p>
                      <input
                        type="date"
                        name="learning_day_detail"
                        className="learning_day_text"
                      />
                      <div className="modal_date">
                        <label
                          htmlFor="date_confirm"
                          className="date_check"
                        ></label>
                        <input
                          type="checkbox"
                          name="date[]"
                          id="date_confirm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal_learning_content">
                    <p className="learning_content_title">
                      学習コンテンツ(複数選択可)
                    </p>
                    <div className="modal_learning_content_detail">
                      <div className="modal_N">
                        <label
                          htmlFor="N_cramSchool"
                          className="N_cramSchool"
                        ></label>
                        <input
                          type="checkbox"
                          name="date[1][]"
                          id="N_cramSchool"
                          value="N予備校"
                        />
                        N予備校
                      </div>
                      <div className="modal_dot">
                        <label
                          htmlFor="dotinstall"
                          className="dotinstall"
                        ></label>
                        <input
                          type="checkbox"
                          name="date[1][]"
                          id="dotinstall"
                          value="ドットインストール"
                        />
                        ドットインストール
                      </div>
                      <div className="modal_Posse">
                        <label htmlFor="posse" className="posse"></label>
                        <input
                          type="checkbox"
                          name="date[1][]"
                          id="posse"
                          value="POSSE課題"
                        />
                        POSSE課題
                      </div>
                    </div>
                  </div>
                  <div className="modal_learning_language">
                    <p className="learning_language_title">
                      学習言語(複数選択可)
                    </p>
                    <div className="learning_language_content">
                      <div className="modal_html">
                        <label htmlFor="html" className="html"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="html"
                          value="HTML"
                        />
                        HTML
                      </div>
                      <div className="modal_css">
                        <label htmlFor="css" className="css"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="css"
                          value="CSS"
                        />
                        CSS
                      </div>
                      <div className="modal_js">
                        <label htmlFor="js" className="js"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="js"
                          value="JavaScript"
                        />
                        JavaScript
                      </div>
                      <div className="modal_php">
                        <label htmlFor="php" className="php"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="php"
                          value="PHP"
                        />
                        PHP
                      </div>
                      <div className="modal_laravel">
                        <label htmlFor="laravel" className="laravel"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="laravel"
                          value="Laravel"
                        />
                        Laravel
                      </div>
                      <div className="modal_sql">
                        <label htmlFor="sql" className="sql"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="sql"
                          value="SQL"
                        />
                        SQL
                      </div>
                      <div className="modal_shell">
                        <label htmlFor="shell" className="shell"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="shell"
                          value="SHELL"
                        />
                        SHELL
                      </div>
                      <div className="modal_others">
                        <label htmlFor="others" className="others"></label>
                        <input
                          type="checkbox"
                          name="date[2][]"
                          id="others"
                          value="情報システム基礎情報（その他)"
                        />
                        情報システム基礎情報(その他)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal_detail_right">
                  <div className="modal_learning_time">
                    <p className="learning_time_title">学習時間</p>
                    <input
                      type="text"
                      name=""
                      className="learning_time_title_detail"
                      placeholder=""
                    />
                  </div>
                  <div className="modal_comment">
                    <p className="comment_title">Twitter用コメント</p>
                    <textarea
                      name=""
                      id="comment_title_detail"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="modal_twitter">
                    <input type="checkbox" name="" />
                    <label
                      htmlFor="modal_twitter_button"
                      className="modal_twitter_button"
                      id="twitter_share"
                    >
                      Twitterにシャアする
                    </label>
                  </div>
                </div>
                <button className="modal_record" id="modal_record">
                  記録・投稿
                </button>
              </div>
            </div>
          </form>
          <div className="calender">
            <div className="calender_content">
              <button id="calender_close">
                <span className="batsu"></span>
              </button>
              <div className="calender_detail">
                <table>
                  <thead>
                    <tr>
                      <th id="prev">&laquo;</th>
                      <th id="title" colSpan="3">
                        2022/10
                      </th>
                      <th id="next">&raquo;</th>
                    </tr>
                    <tr>
                      <th className="weekday">Sun</th>
                      <th className="weekday">Mon</th>
                      <th className="weekday">Tue</th>
                      <th className="weekday">Wed</th>
                      <th className="weekday">Thu</th>
                      <th className="weekday">Fri</th>
                      <th className="weekday">Sat</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <button className="calender_decide">決定</button>
            </div>
          </div>
          <div className="loading">
            <button className="loading_close">
              <span className="batsu"></span>
            </button>
            <div className="loading_content">
              <div className="loader"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
