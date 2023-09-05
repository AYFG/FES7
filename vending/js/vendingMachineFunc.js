class VendingMachineFunc {
  constructor() {
    // section 1 요소 선택
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    // section 2 요소 선택
    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box p");

    // section3 요소 선택
    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  setup() {
    this.bindEvents();
  }

  //장바구니에 선택한 음료수의 목록을 생성하는 것이 목적
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
    <img src="./img/${target.dataset.img}" alt="">
     ${target.dataset.item}
     <strong>
       1
      <span class="a11y-hidden">개</span>
   </strong>
    `;
    this.stagedList.append(stagedItem);
  }

  //   이벤트를 붙여줍니다.
  bindEvents() {
    /**
     * 1. 입금 버튼 기능
     *  1.1 소지금에 입력된 입금액을 -= 해준다
     *  1.2 입력된 입금액을 잔액에 += 해준다
     *  1.3 입금액이 소지금보다 많으면 "소지금이 부족하다" 경고창을 띄운다
     *  1.4 입금 인풋의 금액을 지워준다.*/
    this.btnPut.addEventListener("click", () => {
      // 사용자 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 현재 사용자의 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 현재 자판기 금액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      // 입금액이 있다면
      // 입금액이 있고 , 소지금 보다 적거나 같다면
      if (inputCost && inputCost > 0) {
        if (inputCost <= myMoneyVal) {
          // Intl 객체를 통해서 사용자 국가에서 사용하는 포맷으로 숫자를 변경한다.
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + " 원";

          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + " 원";
        } else {
          alert("소지금이 부족합니다.");
        }
        //사용자가 입력한 입금액 인풋창을 초기화 한다.
        this.inputCostEl.value = null;
      }
    });

    /**
     *  2. 거스름돈 반환 기능
     *  2.1 거스름돈 반환 버튼을 누르면 잔액의 금액이 초기화되고
     *      2.2 소지금으로 그 금액이 들어간다
     */
    this.btnReturn.addEventListener("click", () => {
      // 현재 사용자의 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 현재 자판기 금액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + " 원";

        this.balance.textContent = null;
      }
    });
    /**
     * 3. 자판기 메뉴 기능
     *  3.1 자판기의 콜라를 누르면 잔액이 금액만큼 차감된다
     *      3.1.1 잔액이 부족하다면 ("잔액이 부족합니다") alert
     *  3.2 누른 콜라가 장바구니에 등록이 된다.
     *  3.3 콜라의 data-count를 -1 한다.
     *      3.4.1 콜라의 data-count가 0이 되면 button 요소에 disabled 속성이 추가되고 , 콜라 템플릿에 strong 태그가 추가되어야 합니다.
     */
    const colaBtns = this.itemList.querySelectorAll("button");

    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", (event) => {
        // 현재 잔액
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );

        // 클릭한 콜라의 가격
        const targetElPrice = parseInt(colaBtn.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll("li");
        let isStaged = false;

        // 잔액이 콜라 가격보다 많거나 동일하다면
        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + " 원";

          //for of 사용법
          for (const item of stagedListItem) {
            // 선택한 콜라가 이미 장바구니에 존재하는 경우
            if (item.dataset.item === colaBtn.dataset.item) {
              const itemTxt = item.querySelector("strong");
              // 장바구니 콜라의 카운트를 1 증가
              itemTxt.firstChild.textContent =
                parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }

          // 만약 처음 선택한 콜라라면 콜라를 장바구니에 담기
          if (!isStaged) {
            this.stagedItemGenerator(colaBtn);
          }
          colaBtn.dataset.count--;

          // 만약 콜라의 카운트가 0 이라면
          if (parseInt(colaBtn.dataset.count) === 0) {
            // disabled 속성 추가 + strong 품절 태그 추가
            colaBtn.disabled = true;
            colaBtn.insertAdjacentHTML(
              "afterbegin",
              '<strong class="soldout">품절</strong>'
            );
          }
        } else {
          alert("잔액이 부족합니다. 돈을 더 입금해주세요.");
        }
      });
    });

    /**
     * 4. 획득 버튼 기능
     * 획득 버튼을 누르면 선택한 음료수의 목록이 획득한 음료 목록으로 이동한다.
     *  획득한 음료의 금액을 모두 합하여 총금액에 출력한다.
     *
     */

    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");
      let totalPrice = 0;

      // 장바구니 아이템을 획득 목록으로 이동하기
      //   this.getList.append(...itemStagedList);
      for (const itemStaged of itemStagedList) {
        let isStaged = false;

        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득리스트에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            const itemTxt = itemGet.querySelector("strong");
            // 획득 목록의 콜라의 카운트를 고른 갯수만큼 증가
            itemTxt.firstChild.textContent =
              parseInt(itemTxt.firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );
            isStaged = true;
            break;
          }
        }
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 비우기
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순환하면서 총 금액을 계산합니다.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });

      this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineFunc;
