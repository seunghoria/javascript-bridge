const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (lengthInput) => {
      try {
        if (Validation.checkBridgeSize(lengthInput)) return lengthInput;
      } catch {
        Console.print("\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (direction) => {
        try {
          if (Validation.checkDirectionInput(direction));
        } catch {
          Console.print(
            "\n[ERROR] 이동할 칸은 위: U, 아래: D로 입력해야 합니다."
          );
          this.readMoving();
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
