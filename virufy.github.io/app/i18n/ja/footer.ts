import { type Footer } from '../types/footer';

const footer: Footer = {
  cookiePolicy: {
    title: 'Cookie設定',
    body: [
      {
        question: '概要',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'カリフォルニア州非営利法人であるVirufyはコロナウイルス検出社会事業団体（当社）であり、以下の住所に所在しています。4546, El Camino Real, B10 #614, Los Altos, 94022, United States of America. 当社は、お客様のプライバシーを尊重しており、お客様が当社のウェブサイト（www.virufy.org）を訪問された際、人工知能（AI）アルゴリズムを使用した端末ベースのコロナウイルス検出開発に必要なデータセット作成のための研究調査にご参加いただいた際に提供する個人情報を法令に従って処理することに尽力しています。',
              },
            ],
          },

          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'にお住まいのユーザー様へ:',
              },
            ],
          },

          // Europe
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'ヨーロッパ',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、EU一般データ保護規則2016/679（以下「GDPR」）の第30条の規定に基づいて取り扱われます。',
              },
            ],
          },

          // Spain
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'スペイン',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、EU一般データ保護規則2016/679（以下"GDPR"）の第30条の規定、および情報社会サービスおよび電子商取引（LSSICE）に関する法律2002年7月11日, 34/2002号（LSSICE）第22条の規定に基づいて取り扱われます。',
              },
            ],
          },

          // Argentina
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'アルゼンチン',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、個人情報の保護に関する、アルゼンチン法律第25.326号に基づいて取り扱われます。',
              },
            ],
          },

          // Brazil
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'ブラジル',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、個人情報の保護に関する、ブラジルの保護法、2018年法律第13.709号（以下、”LGPD”）に基づいて取り扱われます。',
              },
            ],
          },

          // Colombia
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'コロンビア',
              },
              {
                type: 'text',
                text: ': このクッキーポリシーは、コロンビアの法律1581号 (2012 年制定) に基づき取り扱われます。',
              },
            ],
          },

          // United Mexican States
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'メキシコ合衆国',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、Virufyプライバシー通知の一部とみなされ、民間部門が保有する個人データの保護に関する連邦法の下で取り扱われます。現在において「プライバシーポリシー」に言及される場合、「プライバシー通知」という用語は互換的に理解されます。',
              },
            ],
          },

          // Bolivia
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'ボリビア',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、ボリビア法に基づき取り扱われます。',
              },
            ],
          },

          // Peru
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'ペルー',
              },
              {
                type: 'text',
                text: ': 本クッキーポリシーは、ペルーの法律に基づいて取り扱われます。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Virufyは、本クッキーポリシーに基づき収集されたお客様の個人情報に対し責任を負う”データ管理者”です。当社のウェブサイトの使用を通じて、または使用に関連して取得した個人データの使用、保存、開示、および処理の詳細については、プライバシーポリシーをご覧ください。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'お客様が初めて当ウェブサイトにアクセスされる際、クッキーおよび類似の技術が使用されていることをお知らせするメッセージが表示されます。「必要なCookieのみ使用する」または「すべてのCookieを許可する」をクリックすることにより、お客様は本クッキーポリシーに記載されているこれらの技術の使用を理解し、同意したものとみなされます。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当社のクッキーポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください',
              },
              {
                type: 'link',
                text: 'study@virufy.org',
                href: 'mailto:study@virufy.org',
              },
              {
                type: 'text',
                text: '。 当社チームより30営業日以内にご返信いたします。',
              },
            ],
          },
        ],
      },
      {
        question: 'クッキーとは何ですか？',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'クッキーは、ウェブサイトにアクセスするたびにコンピューターまたはモバイルデバイスに保存される小さなデータを含むテキストファイルです。これらは、ウェブサイトの運用や機能をより効率的にしたり、ウェブサイトの所有者に情報を提供するために使用されます。 クッキーは、ウェブサイトが読み書きできるようにすることで顧客体験を向上させ、訪問者を認識し、訪問者がウェブサイトをより便利に使用できるようにする重要な情報を記憶できるようにします。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'ウェブサイトの所有者（この場合、Virufy）が設定するクッキー を「ファーストパーティークッキー」と呼びます。第三者ウェブサイトの所有者によって設定されたクッキーは、「サードパーティークッキー」と呼ばれます。サードパーティーのクッキーを使用すると、サードパーティの機能をウェブサイト上またはウェブサイトを通じて提供できます（例：分析など）。',
              },
            ],
          },
        ],
      },
      {
        question: 'Cookieの使用方法について',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'クッキーは、お客様がウェブサイトを訪れた際にウェブサーバーがウェブブラウザに渡すメッセージです。クッキーはウェブサイトの活動を追跡し、オンラインショッピングの追跡、お客様の好みを記憶、パーソナライズされたウェブページによってお客様の顧客体験を向上させるために使用されます。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当社は、ウェブサイトをより使いやすくするために、以下の種類のクッキー*を使用することがあります:',
              },
            ],
          },
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'エッセンシャルクッキー',
              },
              {
                type: 'text',
                text: ': これらのクッキーはサービスの運用または提供に不可欠なクッキーです。たとえば、ウェブサイトの安全な領域にアクセスできるようにするクッキーが含まれます。このクッキーを使用して、データを処理するために必要な同意を取得します。',
              },
            ],
          },
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'プリファレンスクッキー',
              },
              {
                type: 'text',
                text: ': これらのクッキーを使用すると、ウェブサイトは、優先言語や現在の地域など、ウェブサイトの動作や外観を変更する情報を記憶できます。',
              },
            ],
          },
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'パフォーマンスクッキー',
              },
              {
                type: 'text',
                text: ': 分析クッキーとも呼ばれるこれらのクッキーは、ウェブサイトの使用に関する情報を収集し、ウェブサイトをより使いやすくするために使用される場合があります。分析クッキーの使用には、ユーザーの識別とウェブサイトの使用の全体的なパターンの理解が含まれますが、これらに限定されません。当社は、この情報を集約した形で使用してウェブサイトの動作改善に活用します。',
              },
            ],
          },
          {
            type: 'list',
            content: [
              {
                type: 'bold',
                text: 'マーケティングクッキー',
              },
              {
                type: 'text',
                text: ': これらのクッキーは、ウェブサイト全体の訪問者を追跡するために使用されます。その目的は、個々のユーザーにとって関連性があり魅力的な広告を表示することであり、それによってパブリッシャーや第三者サービスの広告主にとってより価値のあるものになります。これらのクッキーは、ブラウザの設定を調整することで削除またはブロックできます（以下の、 "クッキーを管理する方法を"参照）。または、以下のリンクに従ってオプトアウトしてください。',
              },
              {
                type: 'link',
                text: 'Google Analytics',
                href: 'https://tools.google.com/dlpage/gaoptout',
              },
              {
                type: 'text',
                text: '。',
              },
            ],
          },
        ],
      },
      {
        question: 'クッキーを管理するには?',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'お客様は、クッキーを受け入れるか拒否するかを決定する権利を持っています。お客様はクッキーを受け入れる必要はなく、いつでも同意を撤回することができます。ただし、エッセンシャルクッキーは、当社のウェブサイトのサービスをお客様に提供するために厳密に必要なものであるため、拒否することはできません。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当社のクッキー同意バナーを使用することで、受け入れるか拒否するかクッキーのカテゴリーを選択することができます。クッキー同意バナーは、通知バナーと当社のウェブサイトにあります。お客様は、ページ下部にある「クッキー設定」をクリックすることで、ウェブサイトから直接、クッキーポリシーの同意を変更または取り消すことができます。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'お客様が「同意する」をクリックしない場合、またはメッセージを閉じない場合でも、引き続き当社のウェブサイトを使用することができます。また、お客様は、お使いのブラウザからクッキーを拒否する設定を有効にすることで、いつでも当社のウェブサイトからのクッキーの受け取りを拒否することができます。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '最も一般的なブラウザについては、以下のリンクから役立つ情報をご覧ください:',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'Apple Safari',
                href: 'https://support.apple.com/en-us/105082',
              },
              {
                type: 'text',
                text: ', ',
              },
              {
                type: 'link',
                text: 'Google Chrome',
                href: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl',
              },
              {
                type: 'text',
                text: ', ',
              },
              {
                type: 'link',
                text: 'Microsoft Edge',
                href: 'https://support.microsoft.com/en-us/help/10607/microsoft-edge-view-delete-browser-history',
              },
              {
                type: 'text',
                text: ', ',
              },
              {
                type: 'link',
                text: 'Microsoft Internet Explorer',
                href: 'https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies',
              },
              {
                type: 'text',
                text: ', ',
              },
              {
                type: 'link',
                text: 'Mozilla Firefox',
                href: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences',
              },
              {
                type: 'text',
                text: ', ',
              },
              {
                type: 'link',
                text: 'Opera',
                href: 'https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/',
              },
            ],
          },
        ],
      },
      {
        question: '本クッキーポリシーの改定',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当社が使用するクッキーの変更を反映するため、またはその他の運営上、法的または規制上の理由により、本クッキーポリシーを随時更新することがあります。当社は、お客様のIPアドレス、メールアドレス、その他の連絡先などの個人情報を収集しないため、お客様の安全のためにご連絡する方法がありません。そのため、クッキーおよび関連技術の使用方法について常に最新情報を入手するために、本クッキーポリシーを定期的に再確認してください。',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '本クッキーポリシーの上部に記載されている日付は、最後に更新された日付を示しています。',
              },
            ],
          },
        ],
      },
      {
        question: 'ご質問・お問い合わせ先',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当社のクッキーまたはその他の技術の使用に関してご不明な点がある場合は、',
              },
              {
                type: 'link',
                text: 'study@virufy.org',
                href: 'mailto:study@virufy.org',
              },
              {
                type: 'text',
                text: 'までご連絡ください。',
              },
            ],
          },
        ],
      },
    ],
  },
  privacyPolicy: {
    title: 'プライバシーポリシー',
    body: [
      {
        question: 'アルゼンチン',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1Fef7l77QP3EZboej6mw_q7fBNrayvs03/view',
              },
            ],
          },
        ],
      },
      {
        question: 'ボリビア',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1ZSrRivk4YJyyDioqYeAsz0fgNAP3UwVn/view',
              },
            ],
          },
        ],
      },
      {
        question: 'ブラジル',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1Zl9QO-Dliik84xjuXCdFGcDOk5GytXr1/view',
              },
            ],
          },
        ],
      },
      {
        question: 'コロンビア',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1eQOx81C5e5CoESYsEnrE9sWhCkTMDPEq/view',
              },
            ],
          },
        ],
      },
      {
        question: 'ギリシャ',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1lMVygBx3pV_lZBhFtZe5go4UM4mFt0qP/view',
              },
            ],
          },
        ],
      },
      {
        question: 'メキシコ',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1Qr3cFttfhjUoKxLcQrVEhsuO-OJ6VE0_/view',
              },
            ],
          },
        ],
      },
      {
        question: 'ペルー',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1UgN2Bu2XIvv2YirLRYloSPlbYln_uzf9/view',
              },
            ],
          },
        ],
      },
      {
        question: 'アメリカ合衆国',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1EB_9q8nSxvJXWMtCfxCWmisM-n03TJYz/view',
              },
            ],
          },
        ],
      },
      {
        question: 'ヨーロッパ',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1EB_9q8nSxvJXWMtCfxCWmisM-n03TJYz/view',
              },
            ],
          },
        ],
      },
      {
        question: '日本',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/11RTMmnHW4SqHNf7htr3xuSi-o2v2vWlp/view',
              },
            ],
          },
        ],
      },
      {
        question: 'その他の国々',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'link',
                text: 'プライバシーポリシー',
                href: 'https://drive.google.com/file/d/1hnxvDJ5qHBnUi7cnkNdyD4PuWMz8Ntss/view',
              },
            ],
          },
        ],
      },
    ],
  },
  personalInfo: {
    title: '個人情報の保護',
    body: [
      {
        question: 'カリフォルニア州消費者プライバシー法の権利',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'カリフォルニア州の消費者は、カリフォルニア州消費者プライバシー法に基づき、個人情報の知識、アクセス、削除の権利を持っています。また、カリフォルニア州の消費者には、自分の個人情報の販売を企業に拒否する権利、およびプライバシー権を行使したことによって差別されない権利があります。Virufyは、カリフォルニア州の消費者の個人情報を販売することはなく、プライバシー権のリクエストに対して差別することもありません。',
              },
            ],
          },
        ],
      },
      {
        question:
          'Virufyのプライバシー慣行に関する通知はプライバシーポリシーで提供されています',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'プライバシーポリシーには、収集される個人情報やデータの種類、収集元、個人情報やデータの処理および保存方法、使用目的が記載されています。また、Virufyが個人情報を開示する場合、そのカテゴリーや第三者についても開示されます。特定のVirufyのサービスに関連してVirufyが個人情報をどのように扱うかについての詳細は、Virufyウェブアプリの最初の使用時または使用前に提供され、いつでも参照可能です。サービスごとのプライバシー通知およびカリフォルニア州向けの開示の最新版は、プライバシーポリシーでご確認ください。',
              },
            ],
          },
        ],
      },
      {
        question: '上記の権利を行使する方法',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'カリフォルニア州の消費者は、直接または代理人を通じて、自分の情報にアクセスしたり削除したりする権利を行使できます。Virufyへは',
              },
              {
                type: 'link',
                text: 'study@virufy.org',
                href: 'mailto:study@virufy.org',
              },
              {
                type: 'text',
                text: 'に連絡することで可能です。Virufyは、セキュリティと詐欺防止のために、あなたの身元を確認するために必要と考える情報を要求します。この情報には、名前、連絡先情報、Virufyとの関係に関連する情報が含まれる場合がありますが、リクエストの状況によって要求される具体的な情報は異なる場合があります。あなたの個人情報を削除する場合、特定の個人情報を永久に回復不可能な状態にし、また特定の個人情報を識別不能な状態にします。',
              },
            ],
          },
        ],
      },
      {
        question: 'ダイレクトマーケティングとトラッキング',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Virufyは、顧客を第三者のウェブサイトを通じて時間とともに追跡し、ターゲティング広告を提供することは行っていないため、ウェブブラウザの「Do Not Track」シグナルには対応していません。当団体のウェブサイトを第三者サイトのリンクから開いた場合、その「Do Not Track」リクエストの認識は、当団体のウェブサイトに到着した時点で終了します。第三者がVirufyのウェブサイトから個人を識別できる情報を収集することは、あなたが直接提供しない限りできません。これについては、プライバシーポリシーでも説明されています。',
              },
            ],
          },
        ],
      },
      {
        question: '未成年者に関する通知',
        answer: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '当団体は、18歳未満の子供からオンラインで情報を故意に収集することはありません。もし13歳未満の子供の個人情報（COPPAに定義される）を収集したことが通知された場合、その情報は可能な限り迅速に削除されます。また、18歳未満の未成年者の個人情報を販売することはなく、将来的に13～16歳の消費者や13歳未満の消費者の親または保護者の明確な許可がない限り、そうすることはありません。',
              },
            ],
          },
        ],
      },
    ],
  },
  nonProfitSection: {
    title: '非営利団体',
    textOne:
      'Virufyは、米国内国歳入庁（IRS）により、内国歳入法第501条（c）（3）に基づく非課税公益法人として認められたカリフォルニア州の非営利法人です。',
    textTwo:
      '©2025 Virufy | VIRUFYは、カリフォルニア州の非営利団体The Covid Detection Foundationの商標です。 | 無断転載禁止',
  },
};

export default footer;
