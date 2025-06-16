// 문제 데이터
const questionData = {
  "subjects": ["소프트웨어 설계", "소프트웨어 개발", "데이터베이스 구축", "프로그래밍 언어 활용", "정보시스템 구축관리"],
  "questions": {
    "소프트웨어 설계": [
      {"id": 1, "question": "소프트웨어 생명주기에서 요구사항 분석 단계에서 사용되는 다이어그램으로, 시스템의 정적 구조를 나타내는 UML 다이어그램은?", "answer": "클래스 다이어그램", "explanation": "클래스 다이어그램(Class Diagram)은 UML에서 시스템의 클래스, 속성, 메서드, 관계 등을 나타내는 정적 구조 다이어그램입니다."},
      {"id": 2, "question": "객체지향 설계 원칙 중 'Single Responsibility Principle'의 약자는?", "answer": "SRP", "explanation": "SRP(Single Responsibility Principle)는 '단일 책임 원칙'으로, 하나의 클래스는 하나의 책임만 가져야 한다는 원칙입니다."},
      {"id": 3, "question": "소프트웨어의 설계 품질을 높이기 위한 디자인 패턴 중, 객체 생성을 서브클래스에 위임하는 패턴은?", "answer": "팩토리 메소드 패턴", "explanation": "팩토리 메소드 패턴(Factory Method Pattern)은 객체 생성을 서브클래스에 위임하여 캡슐화하는 디자인 패턴입니다."},
      {"id": 4, "question": "UML에서 객체들 간의 메시지 교환을 시간 순서에 따라 나타내는 다이어그램은?", "answer": "시퀀스 다이어그램", "explanation": "시퀀스 다이어그램(Sequence Diagram)은 객체들 간의 메시지 교환을 시간 순서에 따라 표현하는 다이어그램입니다."},
      {"id": 5, "question": "소프트웨어 아키텍처 패턴 중 데이터, 뷰, 컨트롤러로 구성되는 패턴은?", "answer": "MVC", "explanation": "MVC(Model-View-Controller) 패턴은 모델, 뷰, 컨트롤러로 구성되어 사용자 인터페이스와 비즈니스 로직을 분리하는 패턴입니다."},
      {"id": 6, "question": "소프트웨어 개발 방법론 중 폭포수 모델의 단계를 순서대로 나열하면?", "answer": "요구사항 분석, 설계, 구현, 테스트, 유지보수", "explanation": "폭포수 모델은 순차적으로 진행되는 개발 방법론으로 각 단계가 완료된 후 다음 단계로 진행됩니다."},
      {"id": 7, "question": "GoF 디자인 패턴 중 생성 패턴에 속하는 것은?", "answer": "싱글톤 패턴", "explanation": "싱글톤 패턴(Singleton Pattern)은 클래스의 인스턴스가 오직 하나만 생성되도록 보장하는 생성 패턴입니다."},
      {"id": 8, "question": "소프트웨어 품질 특성 중 사용자가 쉽게 이해하고 사용할 수 있는 정도를 나타내는 것은?", "answer": "사용성", "explanation": "사용성(Usability)은 사용자가 시스템을 쉽게 이해하고 효과적으로 사용할 수 있는 정도를 의미합니다."},
      {"id": 9, "question": "소프트웨어 요구사항 중 성능, 보안, 사용성 등과 같은 요구사항을 무엇이라고 하는가?", "answer": "비기능 요구사항", "explanation": "비기능 요구사항(Non-functional Requirements)은 시스템의 품질 특성을 명시하는 요구사항입니다."},
      {"id": 10, "question": "UML 행위 다이어그램 중 시스템 내 객체의 상태 변화를 표현하는 다이어그램은?", "answer": "상태 다이어그램", "explanation": "상태 다이어그램(State Diagram)은 객체의 생명주기 동안 상태 변화를 모델링하는 다이어그램입니다."},
      {"id": 11, "question": "애자일 방법론의 핵심 가치 중 '개인과 상호작용'을 중시하는 가치는?", "answer": "프로세스와 도구보다 개인과 상호작용을", "explanation": "애자일 선언문에서는 프로세스와 도구보다 개인과 상호작용을 더 가치있게 여깁니다."},
      {"id": 12, "question": "소프트웨어 아키텍처에서 계층화 구조의 장점은?", "answer": "모듈성과 재사용성 향상", "explanation": "계층화 아키텍처는 각 계층의 독립성을 보장하여 모듈성과 재사용성을 향상시킵니다."},
      {"id": 13, "question": "객체지향 프로그래밍의 특징 중 같은 이름의 메소드가 다양한 형태로 동작하는 것은?", "answer": "다형성", "explanation": "다형성(Polymorphism)은 같은 이름의 메소드가 객체에 따라 다르게 동작하는 특성입니다."},
      {"id": 14, "question": "소프트웨어 테스팅에서 화이트박스 테스트의 특징은?", "answer": "코드 내부 구조를 알고 테스트", "explanation": "화이트박스 테스트는 소프트웨어의 내부 구조와 논리를 바탕으로 수행하는 테스트 기법입니다."},
      {"id": 15, "question": "UML 다이어그램 중 시스템의 구성 요소와 그들 간의 관계를 나타내는 것은?", "answer": "컴포넌트 다이어그램", "explanation": "컴포넌트 다이어그램(Component Diagram)은 시스템의 구성 요소와 의존 관계를 표현합니다."},
      {"id": 16, "question": "소프트웨어 개발에서 위험 관리의 첫 번째 단계는?", "answer": "위험 식별", "explanation": "위험 관리는 위험 식별, 위험 분석, 위험 계획, 위험 모니터링 순으로 진행됩니다."},
      {"id": 17, "question": "모듈 간의 결합도를 낮추고 응집도를 높이는 것의 목적은?", "answer": "유지보수성 향상", "explanation": "낮은 결합도와 높은 응집도는 모듈의 독립성을 높여 유지보수성을 향상시킵니다."},
      {"id": 18, "question": "소프트웨어 프로세스 개선 모델 중 5단계로 구성된 것은?", "answer": "CMMI", "explanation": "CMMI(Capability Maturity Model Integration)는 초기, 관리, 정의, 정량 관리, 최적화의 5단계로 구성됩니다."},
      {"id": 19, "question": "객체지향 설계에서 추상화의 목적은?", "answer": "복잡성 감소", "explanation": "추상화는 불필요한 세부사항을 숨기고 중요한 특성만 강조하여 복잡성을 줄입니다."},
      {"id": 20, "question": "소프트웨어 요구사항 명세의 특성 중 모호하지 않고 명확해야 한다는 특성은?", "answer": "명확성", "explanation": "명확성(Clarity)은 요구사항이 모호하지 않고 정확하게 이해될 수 있어야 한다는 특성입니다."}
    ],
    "소프트웨어 개발": [
      {"id": 21, "question": "다음 C 코드의 실행 결과는?\nint a = 10, b = 20;\nprintf(\"%d\", a++ + ++b);", "answer": "31", "explanation": "a++(후위 증가)는 현재 값 10을 사용한 후 증가, ++b(전위 증가)는 증가 후 값 21을 사용하므로 10 + 21 = 31이 됩니다."},
      {"id": 22, "question": "소스코드를 기계어로 변환하는 과정에서 중간 단계에서 생성되는 코드를 무엇이라고 하는가?", "answer": "중간 코드", "explanation": "컴파일러는 소스코드를 분석한 후 최적화된 기계어로 변환하기 전에 중간 코드(Intermediate Code)를 생성합니다."},
      {"id": 23, "question": "다음 중 소프트웨어 버전 관리 시스템이 아닌 것은?", "answer": "Docker", "explanation": "Docker는 컨테이너 기반 가상화 도구이며, Git, SVN, Mercurial 등이 버전 관리 시스템입니다."},
      {"id": 24, "question": "다음 Java 코드의 실행 결과는?\nString str = \"Hello\";\nstr.concat(\" World\");\nSystem.out.println(str);", "answer": "Hello", "explanation": "String은 불변 객체이므로 concat() 메소드는 새로운 문자열을 반환하지만 str 변수는 변경되지 않습니다."},
      {"id": 25, "question": "다음 Python 코드의 실행 결과는?\nlist1 = [1, 2, 3]\nlist2 = list1\nlist2.append(4)\nprint(len(list1))", "answer": "4", "explanation": "list2 = list1은 참조 복사이므로 list2를 변경하면 list1도 함께 변경됩니다. 따라서 list1의 길이는 4가 됩니다."},
      {"id": 26, "question": "컴파일러의 구성 요소 중 토큰을 생성하는 단계는?", "answer": "어휘 분석", "explanation": "어휘 분석(Lexical Analysis)은 소스 코드를 토큰으로 분할하는 컴파일러의 첫 번째 단계입니다."},
      {"id": 27, "question": "소프트웨어 개발에서 단위 테스트의 대상은?", "answer": "모듈", "explanation": "단위 테스트(Unit Test)는 개별 모듈이나 함수를 대상으로 하는 테스트입니다."},
      {"id": 28, "question": "다음 C++ 코드에서 가상 함수의 목적은?", "answer": "런타임 다형성 구현", "explanation": "가상 함수(Virtual Function)는 런타임에 객체의 실제 타입에 따라 호출될 함수가 결정되는 다형성을 구현합니다."},
      {"id": 29, "question": "소프트웨어 개발에서 리팩토링의 목적은?", "answer": "코드 품질 개선", "explanation": "리팩토링(Refactoring)은 기능을 변경하지 않고 코드의 구조와 품질을 개선하는 과정입니다."},
      {"id": 30, "question": "인터프리터와 컴파일러의 차이점은?", "answer": "실행 시점", "explanation": "컴파일러는 실행 전에 전체 코드를 기계어로 변환하고, 인터프리터는 실행 시 한 줄씩 해석합니다."},
      {"id": 31, "question": "소프트웨어 개발에서 API의 의미는?", "answer": "응용 프로그램 프로그래밍 인터페이스", "explanation": "API(Application Programming Interface)는 응용 프로그램이 다른 소프트웨어와 상호작용할 수 있게 해주는 인터페이스입니다."},
      {"id": 32, "question": "객체지향 프로그래밍에서 캡슐화의 장점은?", "answer": "정보 은닉", "explanation": "캡슐화(Encapsulation)는 객체의 내부 구현을 숨기고 필요한 인터페이스만 제공하는 정보 은닉을 구현합니다."},
      {"id": 33, "question": "소프트웨어 개발 방법론 중 나선형 모델의 특징은?", "answer": "위험 분석 중심", "explanation": "나선형 모델(Spiral Model)은 각 단계에서 위험 분석을 수행하여 위험을 최소화하는 개발 방법론입니다."},
      {"id": 34, "question": "데이터 구조에서 스택의 특징은?", "answer": "LIFO", "explanation": "스택(Stack)은 Last In First Out 구조로, 마지막에 입력된 데이터가 먼저 출력됩니다."},
      {"id": 35, "question": "소프트웨어 개발에서 형상 관리의 목적은?", "answer": "변경 사항 추적", "explanation": "형상 관리(Configuration Management)는 소프트웨어 변경 사항을 체계적으로 추적하고 관리하는 활동입니다."},
      {"id": 36, "question": "프로그래밍에서 재귀 함수의 조건은?", "answer": "종료 조건", "explanation": "재귀 함수는 자기 자신을 호출하는 함수로, 무한 호출을 방지하기 위한 종료 조건이 필요합니다."},
      {"id": 37, "question": "소프트웨어 개발에서 모듈화의 장점은?", "answer": "재사용성 향상", "explanation": "모듈화는 기능을 독립적인 단위로 분할하여 재사용성과 유지보수성을 향상시킵니다."},
      {"id": 38, "question": "알고리즘 복잡도에서 O(n)의 의미는?", "answer": "선형 시간", "explanation": "O(n)은 입력 크기에 비례하여 실행 시간이 증가하는 선형 시간 복잡도를 의미합니다."},
      {"id": 39, "question": "소프트웨어 테스팅에서 블랙박스 테스트의 특징은?", "answer": "기능 중심 테스트", "explanation": "블랙박스 테스트는 소프트웨어의 내부 구조를 모르는 상태에서 기능을 중심으로 테스트합니다."},
      {"id": 40, "question": "소프트웨어 개발에서 페어 프로그래밍의 장점은?", "answer": "코드 품질 향상", "explanation": "페어 프로그래밍은 두 명이 함께 코딩함으로써 실시간 코드 리뷰와 지식 공유를 통해 품질을 향상시킵니다."}
    ],
    "데이터베이스 구축": [
      {"id": 41, "question": "다음 SQL 쿼리의 결과는?\nSELECT COUNT(*) FROM 학생 WHERE 학과='컴퓨터공학' AND 학년=3;", "answer": "컴퓨터공학과 3학년 학생 수", "explanation": "해당 쿼리는 학과가 '컴퓨터공학'이고 학년이 3인 학생의 수를 계산합니다."},
      {"id": 42, "question": "데이터베이스 정규화 과정에서 이행적 종속(Transitive Dependency)을 제거하는 정규형은?", "answer": "3NF", "explanation": "제3정규형(3NF)은 제2정규형을 만족하면서 기본키에 속하지 않은 속성들 간의 이행적 종속을 제거한 상태입니다."},
      {"id": 43, "question": "관계형 데이터베이스에서 여러 테이블의 데이터를 결합할 때 사용하는 연산은?", "answer": "JOIN", "explanation": "JOIN 연산은 두 개 이상의 테이블에서 관련된 튜플들을 결합하는 연산입니다."},
      {"id": 44, "question": "데이터베이스에서 특정 조건을 만족하는 데이터를 검색하는 SQL 구문은?", "answer": "SELECT", "explanation": "SELECT 문은 데이터베이스에서 조건에 맞는 데이터를 검색하는 SQL 구문입니다."},
      {"id": 45, "question": "데이터베이스의 무결성 제약조건 중 외래키가 참조하는 테이블의 기본키 값이 변경되거나 삭제될 때 외래키를 포함하는 테이블의 처리 방식은?", "answer": "참조 무결성", "explanation": "참조 무결성(Referential Integrity)은 외래키가 참조하는 테이블의 기본키 값이 존재해야 한다는 제약조건입니다."},
      {"id": 46, "question": "데이터베이스에서 트랜잭션의 ACID 특성 중 A는?", "answer": "원자성", "explanation": "원자성(Atomicity)은 트랜잭션이 모두 실행되거나 모두 실행되지 않아야 한다는 특성입니다."},
      {"id": 47, "question": "관계형 데이터베이스에서 기본키의 특징은?", "answer": "유일성과 NOT NULL", "explanation": "기본키(Primary Key)는 테이블에서 각 행을 유일하게 식별하며 NULL 값을 가질 수 없습니다."},
      {"id": 48, "question": "데이터베이스에서 인덱스의 목적은?", "answer": "검색 성능 향상", "explanation": "인덱스(Index)는 데이터 검색 속도를 향상시키기 위한 데이터 구조입니다."},
      {"id": 49, "question": "SQL에서 GROUP BY 절의 용도는?", "answer": "그룹별 집계", "explanation": "GROUP BY 절은 특정 칼럼을 기준으로 데이터를 그룹화하여 집계 함수를 적용할 때 사용합니다."},
      {"id": 50, "question": "데이터베이스에서 뷰(View)의 장점은?", "answer": "보안성 향상", "explanation": "뷰(View)는 사용자에게 필요한 데이터만 제공하여 보안성을 향상시키고 복잡한 쿼리를 단순화합니다."},
      {"id": 51, "question": "데이터베이스 정규화의 목적은?", "answer": "중복 제거", "explanation": "데이터베이스 정규화는 데이터 중복을 제거하고 일관성을 유지하기 위한 과정입니다."},
      {"id": 52, "question": "관계형 데이터베이스에서 카티션 곱(Cartesian Product)의 결과는?", "answer": "모든 조합", "explanation": "카티션 곱은 두 테이블의 모든 행의 조합을 생성하는 연산입니다."},
      {"id": 53, "question": "데이터베이스에서 동시성 제어의 목적은?", "answer": "일관성 유지", "explanation": "동시성 제어는 여러 트랜잭션이 동시에 실행될 때 데이터의 일관성을 유지하기 위한 기법입니다."},
      {"id": 54, "question": "SQL에서 HAVING 절의 특징은?", "answer": "GROUP BY 결과 필터링", "explanation": "HAVING 절은 GROUP BY로 그룹화된 결과에 조건을 적용하여 필터링할 때 사용합니다."},
      {"id": 55, "question": "데이터베이스에서 스키마의 의미는?", "answer": "데이터베이스 구조", "explanation": "스키마(Schema)는 데이터베이스의 구조와 제약조건을 정의하는 틀입니다."},
      {"id": 56, "question": "관계형 데이터베이스에서 후보키의 특징은?", "answer": "유일성과 최소성", "explanation": "후보키(Candidate Key)는 테이블에서 행을 유일하게 식별할 수 있는 최소한의 속성 집합입니다."},
      {"id": 57, "question": "데이터베이스에서 트리거(Trigger)의 용도는?", "answer": "자동 실행", "explanation": "트리거는 특정 이벤트가 발생했을 때 자동으로 실행되는 프로시저입니다."},
      {"id": 58, "question": "SQL에서 UNION 연산의 특징은?", "answer": "중복 제거", "explanation": "UNION 연산은 두 개 이상의 SELECT 결과를 합치면서 중복된 행을 제거합니다."},
      {"id": 59, "question": "데이터베이스에서 락(Lock)의 목적은?", "answer": "동시 접근 제어", "explanation": "락(Lock)은 동시에 접근하는 트랜잭션들 간의 충돌을 방지하기 위한 메커니즘입니다."},
      {"id": 60, "question": "관계형 데이터베이스에서 함수적 종속성의 의미는?", "answer": "값 결정 관계", "explanation": "함수적 종속성은 한 속성의 값이 결정되면 다른 속성의 값이 유일하게 결정되는 관계입니다."}
    ],
    "프로그래밍 언어 활용": [
      {"id": 61, "question": "다음 Python 코드의 실행 결과는?\nprint([x for x in range(10) if x % 2 == 0])", "answer": "[0, 2, 4, 6, 8]", "explanation": "이 코드는 0부터 9까지의 숫자 중 짝수만 선택하여 리스트로 반환하는 리스트 컴프리헨션입니다."},
      {"id": 62, "question": "Java에서 다형성(Polymorphism)을 구현하는 방법 중 하나는?", "answer": "메소드 오버라이딩", "explanation": "메소드 오버라이딩(Method Overriding)은 부모 클래스의 메소드를 자식 클래스에서 재정의하여 다형성을 구현하는 방법입니다."},
      {"id": 63, "question": "JavaScript에서 비동기 처리를 위해 사용되는 객체는?", "answer": "Promise", "explanation": "Promise는 JavaScript에서 비동기 연산의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체입니다."},
      {"id": 64, "question": "다음 Python 코드의 실행 결과는?\nstring = \"Hello, World!\"\nprint(string[:5])", "answer": "Hello", "explanation": "Python에서 문자열 슬라이싱 string[:5]는 처음부터 인덱스 4까지의 문자를 추출합니다."},
      {"id": 65, "question": "프로그래밍 언어에서 변수의 스코프(Scope)란?", "answer": "변수의 유효 범위", "explanation": "스코프(Scope)는 변수가 선언된 위치에 따라 결정되는 변수의 유효 범위를 의미합니다."},
      {"id": 66, "question": "C언어에서 포인터의 용도는?", "answer": "메모리 주소 저장", "explanation": "포인터는 다른 변수의 메모리 주소를 저장하는 변수로, 동적 메모리 할당과 참조에 사용됩니다."},
      {"id": 67, "question": "Java에서 가비지 컬렉션의 목적은?", "answer": "메모리 자동 관리", "explanation": "가비지 컬렉션(Garbage Collection)은 사용하지 않는 객체를 자동으로 메모리에서 해제하는 기능입니다."},
      {"id": 68, "question": "Python에서 리스트와 튜플의 차이점은?", "answer": "가변성", "explanation": "리스트는 변경 가능한(mutable) 자료형이고, 튜플은 변경 불가능한(immutable) 자료형입니다."},
      {"id": 69, "question": "JavaScript에서 함수를 변수에 할당할 수 있는 특징을 무엇이라고 하는가?", "answer": "일급 객체", "explanation": "JavaScript에서 함수는 일급 객체(First-class Object)로, 변수에 할당하고 매개변수로 전달할 수 있습니다."},
      {"id": 70, "question": "프로그래밍에서 예외 처리의 목적은?", "answer": "오류 상황 대응", "explanation": "예외 처리는 프로그램 실행 중 발생할 수 있는 오류 상황에 적절히 대응하기 위한 메커니즘입니다."},
      {"id": 71, "question": "C++에서 클래스의 접근 지정자 중 가장 제한적인 것은?", "answer": "private", "explanation": "private 접근 지정자는 클래스 내부에서만 접근 가능한 가장 제한적인 접근 수준입니다."},
      {"id": 72, "question": "프로그래밍에서 상수의 특징은?", "answer": "값 변경 불가", "explanation": "상수(Constant)는 한 번 값이 할당되면 프로그램 실행 중에 변경할 수 없는 변수입니다."},
      {"id": 73, "question": "객체지향 프로그래밍에서 상속의 장점은?", "answer": "코드 재사용", "explanation": "상속(Inheritance)은 기존 클래스의 속성과 메소드를 재사용할 수 있게 해주는 기능입니다."},
      {"id": 74, "question": "프로그래밍에서 배열의 특징은?", "answer": "인덱스 접근", "explanation": "배열(Array)은 같은 타입의 데이터를 연속된 메모리에 저장하여 인덱스로 접근할 수 있는 자료구조입니다."},
      {"id": 75, "question": "함수형 프로그래밍의 특징은?", "answer": "부작용 없음", "explanation": "함수형 프로그래밍은 함수가 부작용(Side Effect) 없이 동일한 입력에 대해 항상 동일한 출력을 반환하는 특징이 있습니다."},
      {"id": 76, "question": "프로그래밍에서 라이브러리의 목적은?", "answer": "기능 재사용", "explanation": "라이브러리는 자주 사용되는 기능들을 모아놓은 코드 집합으로, 개발자가 기능을 재사용할 수 있게 해줍니다."},
      {"id": 77, "question": "컴파일 언어와 인터프리터 언어의 주요 차이점은?", "answer": "실행 방식", "explanation": "컴파일 언어는 실행 전에 기계어로 변환되고, 인터프리터 언어는 실행 시에 한 줄씩 해석됩니다."},
      {"id": 78, "question": "프로그래밍에서 반복문의 용도는?", "answer": "반복 실행", "explanation": "반복문(Loop)은 특정 조건이 만족되는 동안 코드를 반복적으로 실행하기 위한 제어 구조입니다."},
      {"id": 79, "question": "객체지향 프로그래밍에서 생성자의 역할은?", "answer": "객체 초기화", "explanation": "생성자(Constructor)는 객체가 생성될 때 객체의 초기 상태를 설정하는 특별한 메소드입니다."},
      {"id": 80, "question": "프로그래밍에서 재귀의 특징은?", "answer": "자기 호출", "explanation": "재귀(Recursion)는 함수가 자기 자신을 호출하는 프로그래밍 기법으로, 복잡한 문제를 간단하게 해결할 수 있습니다."}
    ],
    "정보시스템 구축관리": [
      {"id": 81, "question": "네트워크에서 IP 주소 변환 기술로, 내부 네트워크와 외부 네트워크 간의 통신을 가능하게 하는 기술은?", "answer": "NAT", "explanation": "NAT(Network Address Translation)는 사설 IP 주소를 공인 IP 주소로 변환하여 인터넷 접속을 가능하게 하는 기술입니다."},
      {"id": 82, "question": "보안 공격 중 서비스 거부(DoS) 공격의 일종으로, 출발지 IP와 목적지 IP를 동일하게 설정하여 시스템을 마비시키는 공격은?", "answer": "Land Attack", "explanation": "Land Attack은 출발지 IP와 목적지 IP를 동일하게 설정하여 시스템이 자신에게 무한히 응답하게 만드는 DoS 공격입니다."},
      {"id": 83, "question": "소프트웨어 개발 프로세스에서 요구사항 변경이 빈번할 때 적합한 개발 방법론은?", "answer": "애자일 방법론", "explanation": "애자일(Agile) 방법론은 변화에 유연하게 대응할 수 있는 반복적이고 점진적인 개발 방법론입니다."},
      {"id": 84, "question": "네트워크 보안에서 특정 포트나 IP 주소로의 접근을 제한하는 시스템은?", "answer": "방화벽", "explanation": "방화벽(Firewall)은 네트워크 보안에서 특정 포트나 IP 주소로의 접근을 제한하는 시스템입니다."},
      {"id": 85, "question": "소프트웨어 개발 라이프사이클(SDLC)에서 가장 마지막 단계는?", "answer": "유지보수", "explanation": "유지보수(Maintenance)는 소프트웨어 개발 라이프사이클의 가장 마지막 단계로, 개발 완료 후 시스템을 운영하며 문제를 해결하고 개선하는 단계입니다."},
      {"id": 86, "question": "네트워크 토폴로지 중 모든 노드가 중앙 허브에 연결된 구조는?", "answer": "스타 토폴로지", "explanation": "스타 토폴로지(Star Topology)는 모든 노드가 중앙의 허브나 스위치에 연결된 네트워크 구조입니다."},
      {"id": 87, "question": "정보 보안의 3요소는?", "answer": "기밀성, 무결성, 가용성", "explanation": "정보 보안의 3요소는 기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)입니다."},
      {"id": 88, "question": "클라우드 컴퓨팅의 서비스 모델 중 플랫폼을 제공하는 것은?", "answer": "PaaS", "explanation": "PaaS(Platform as a Service)는 개발 플랫폼을 클라우드 서비스로 제공하는 모델입니다."},
      {"id": 89, "question": "네트워크에서 OSI 7계층 모델의 최상위 계층은?", "answer": "응용 계층", "explanation": "응용 계층(Application Layer)은 OSI 7계층 모델의 7번째이자 최상위 계층으로, 사용자와 직접 상호작용하는 계층입니다."},
      {"id": 90, "question": "프로젝트 관리에서 WBS의 의미는?", "answer": "작업 분할 구조", "explanation": "WBS(Work Breakdown Structure)는 프로젝트를 관리 가능한 작은 단위로 분할하는 구조입니다."},
      {"id": 91, "question": "네트워크에서 DNS의 역할은?", "answer": "도메인명 변환", "explanation": "DNS(Domain Name System)는 도메인명을 IP 주소로 변환하는 서비스입니다."},
      {"id": 92, "question": "소프트웨어 품질 관리에서 SQA의 의미는?", "answer": "소프트웨어 품질 보증", "explanation": "SQA(Software Quality Assurance)는 소프트웨어 품질을 보증하기 위한 체계적인 활동입니다."},
      {"id": 93, "question": "암호화에서 대칭키 암호화의 특징은?", "answer": "동일한 키 사용", "explanation": "대칭키 암호화는 암호화와 복호화에 동일한 키를 사용하는 암호화 방식입니다."},
      {"id": 94, "question": "네트워크에서 TCP와 UDP의 주요 차이점은?", "answer": "신뢰성", "explanation": "TCP는 신뢰성 있는 연결 지향 프로토콜이고, UDP는 비연결 지향의 빠른 프로토콜입니다."},
      {"id": 95, "question": "정보시스템 감리의 목적은?", "answer": "품질 보증", "explanation": "정보시스템 감리는 시스템의 품질을 보증하고 리스크를 최소화하기 위한 독립적인 검증 활동입니다."},
      {"id": 96, "question": "소프트웨어 개발에서 DevOps의 목적은?", "answer": "개발과 운영 통합", "explanation": "DevOps는 개발(Development)과 운영(Operations)을 통합하여 소프트웨어 배포 주기를 단축하고 품질을 향상시키는 방법론입니다."},
      {"id": 97, "question": "네트워크 보안에서 VPN의 목적은?", "answer": "안전한 연결", "explanation": "VPN(Virtual Private Network)은 공용 네트워크를 통해 안전한 사설 네트워크 연결을 제공하는 기술입니다."},
      {"id": 98, "question": "프로젝트 관리에서 간트 차트의 용도는?", "answer": "일정 관리", "explanation": "간트 차트(Gantt Chart)는 프로젝트의 작업 일정과 진행 상황을 시각적으로 표현하는 도구입니다."},
      {"id": 99, "question": "클라우드 컴퓨팅의 배포 모델 중 혼합형은?", "answer": "하이브리드 클라우드", "explanation": "하이브리드 클라우드(Hybrid Cloud)는 퍼블릭 클라우드와 프라이빗 클라우드를 결합한 배포 모델입니다."},
      {"id": 100, "question": "정보보안에서 접근 통제의 3요소는?", "answer": "인증, 인가, 계정관리", "explanation": "접근 통제의 3요소는 인증(Authentication), 인가(Authorization), 계정관리(Accounting)입니다."}
    ]
  }
};

// 애플리케이션 상태 관리
let appState = {
  currentScreen: 'mainScreen',
  examMode: {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    examStarted: false
  },
  subjectMode: {
    currentSubject: null,
    questions: []
  },
  statistics: {
    totalSolved: 0,
    totalCorrect: 0,
    examCount: 0,
    examScores: [],
    subjectProgress: {}
  }
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  updateStatistics();
  createSubjectCards();
  initializeSubjectProgress();
}

// 통계 업데이트
function updateStatistics() {
  const stats = appState.statistics;
  const accuracy = stats.totalSolved > 0 ? Math.round((stats.totalCorrect / stats.totalSolved) * 100) : 0;
  const avgScore = stats.examScores.length > 0 ? Math.round(stats.examScores.reduce((a, b) => a + b, 0) / stats.examScores.length) : 0;
  const bestScore = stats.examScores.length > 0 ? Math.max(...stats.examScores) : 0;

  // 헤더 통계
  document.getElementById('solvedCount').textContent = stats.totalSolved;
  document.getElementById('accuracyRate').textContent = accuracy;

  // 진도 화면 통계
  document.getElementById('totalSolved').textContent = stats.totalSolved;
  document.getElementById('totalCorrect').textContent = stats.totalCorrect;
  document.getElementById('totalAccuracy').textContent = accuracy + '%';
  document.getElementById('examCount').textContent = stats.examCount;
  document.getElementById('avgScore').textContent = avgScore + '점';
  document.getElementById('bestScore').textContent = bestScore + '점';
}

// 화면 전환 함수들
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  appState.currentScreen = screenId;
}

function showMainScreen() {
  showScreen('mainScreen');
  updateStatistics();
}

function showSubjectLearning() {
  showScreen('subjectScreen');
  createSubjectCards();
}

function showProgress() {
  showScreen('progressScreen');
  updateStatistics();
  updateSubjectProgress();
}

// 과목 카드 생성
function createSubjectCards() {
  const subjectGrid = document.getElementById('subjectGrid');
  subjectGrid.innerHTML = '';

  questionData.subjects.forEach(subject => {
    const questions = questionData.questions[subject];
    const progress = appState.statistics.subjectProgress[subject] || { solved: 0, correct: 0 };
    const progressPercent = questions ? Math.round((progress.solved / questions.length) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.onclick = () => showSubjectQuestions(subject);
    
    card.innerHTML = `
      <h3>${subject}</h3>
      <p>정보처리기사 실기 ${subject} 분야의 핵심 문제들을 학습하세요.</p>
      <div class="subject-meta">
        <span>총 ${questions ? questions.length : 0}문제</span>
        <span>진도: ${progressPercent}%</span>
      </div>
    `;
    
    subjectGrid.appendChild(card);
  });
}

// 과목별 문제 화면
function showSubjectQuestions(subject) {
  showScreen('subjectQuestionsScreen');
  document.getElementById('subjectTitle').textContent = subject;
  
  const questions = questionData.questions[subject] || [];
  const questionsList = document.getElementById('questionsList');
  questionsList.innerHTML = '';

  questions.forEach((question, index) => {
    const questionItem = document.createElement('div');
    questionItem.className = 'question-item';
    questionItem.innerHTML = `
      <div class="question-item-header" onclick="toggleQuestion(${index})">
        <h4>문제 ${index + 1}</h4>
        <span>+</span>
      </div>
      <div class="question-item-content">
        <p><strong>문제:</strong> ${question.question}</p>
        <div class="question-item-answer">
          <strong>정답:</strong> ${question.answer}
        </div>
        <div class="question-item-explanation">
          <strong>해설:</strong> ${question.explanation}
        </div>
      </div>
    `;
    questionsList.appendChild(questionItem);
  });
}

function toggleQuestion(index) {
  const questionItems = document.querySelectorAll('.question-item');
  const item = questionItems[index];
  const isActive = item.classList.contains('active');
  
  // 모든 문제 닫기
  questionItems.forEach(item => item.classList.remove('active'));
  
  // 클릭한 문제만 열기 (이미 열려있었다면 닫기)
  if (!isActive) {
    item.classList.add('active');
  }
}

// 시험 시작
function startExam() {
  showScreen('examScreen');
  
  // 모든 문제에서 30개 랜덤 선택
  const allQuestions = [];
  Object.values(questionData.questions).forEach(subjectQuestions => {
    allQuestions.push(...subjectQuestions);
  });
  
  // 30개 문제 랜덤 선택
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  appState.examMode.questions = shuffled.slice(0, 30);
  appState.examMode.currentQuestionIndex = 0;
  appState.examMode.userAnswers = [];
  appState.examMode.correctAnswers = 0;
  appState.examMode.examStarted = true;
  
  document.getElementById('totalQuestions').textContent = '30';
  showCurrentQuestion();
}

function showCurrentQuestion() {
  const exam = appState.examMode;
  const question = exam.questions[exam.currentQuestionIndex];
  
  if (!question) return;
  
  // 과목 찾기
  let subject = '';
  for (const [subjectName, questions] of Object.entries(questionData.questions)) {
    if (questions.find(q => q.id === question.id)) {
      subject = subjectName;
      break;
    }
  }
  
  document.getElementById('questionSubject').textContent = subject;
  document.getElementById('questionNumber').textContent = exam.currentQuestionIndex + 1;
  document.getElementById('currentQuestion').textContent = exam.currentQuestionIndex + 1;
  document.getElementById('questionContent').textContent = question.question;
  document.getElementById('answerInput').value = '';
  document.getElementById('answerInput').focus();
  
  // 프로그레스 바 업데이트
  const progress = ((exam.currentQuestionIndex + 1) / 30) * 100;
  document.getElementById('examProgress').style.width = progress + '%';
  
  // 버튼 상태 초기화
  document.getElementById('nextBtn').style.display = 'none';
  document.querySelector('.btn--primary').style.display = 'inline-flex';
}

function checkAnswer() {
  const exam = appState.examMode;
  const question = exam.questions[exam.currentQuestionIndex];
  const userAnswer = document.getElementById('answerInput').value.trim();
  
  if (!userAnswer) {
    alert('답을 입력해주세요.');
    return;
  }
  
  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(question.answer);
  
  // 답안 저장
  exam.userAnswers.push({
    question: question,
    userAnswer: userAnswer,
    isCorrect: isCorrect
  });
  
  if (isCorrect) {
    exam.correctAnswers++;
  }
  
  // 통계 업데이트
  appState.statistics.totalSolved++;
  if (isCorrect) {
    appState.statistics.totalCorrect++;
  }
  
  // 과목별 통계 업데이트
  let subject = '';
  for (const [subjectName, questions] of Object.entries(questionData.questions)) {
    if (questions.find(q => q.id === question.id)) {
      subject = subjectName;
      break;
    }
  }
  
  if (subject) {
    if (!appState.statistics.subjectProgress[subject]) {
      appState.statistics.subjectProgress[subject] = { solved: 0, correct: 0 };
    }
    appState.statistics.subjectProgress[subject].solved++;
    if (isCorrect) {
      appState.statistics.subjectProgress[subject].correct++;
    }
  }
  
  // 결과 모달 표시
  showAnswerModal(isCorrect, question.answer, question.explanation);
  
  // 버튼 상태 변경
  document.querySelector('.btn--primary').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-flex';
}

function normalizeAnswer(answer) {
  return answer.toLowerCase().trim().replace(/\s+/g, '');
}

function showAnswerModal(isCorrect, correctAnswer, explanation) {
  const modal = document.getElementById('answerModal');
  const resultElement = document.getElementById('modalResult');
  
  resultElement.textContent = isCorrect ? '정답!' : '오답';
  resultElement.className = 'modal-result ' + (isCorrect ? 'correct' : 'incorrect');
  
  document.getElementById('modalCorrectAnswer').textContent = correctAnswer;
  document.getElementById('modalExplanation').textContent = explanation;
  
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('answerModal').style.display = 'none';
}

function nextQuestion() {
  const exam = appState.examMode;
  exam.currentQuestionIndex++;
  
  if (exam.currentQuestionIndex >= exam.questions.length) {
    // 시험 완료
    finishExam();
  } else {
    showCurrentQuestion();
  }
}

function finishExam() {
  const exam = appState.examMode;
  const score = Math.round((exam.correctAnswers / 30) * 100);
  
  // 시험 통계 업데이트
  appState.statistics.examCount++;
  appState.statistics.examScores.push(score);
  
  showScreen('resultScreen');
  
  // 결과 표시
  document.getElementById('finalScore').textContent = score;
  document.getElementById('correctCount').textContent = exam.correctAnswers;
  document.getElementById('incorrectCount').textContent = 30 - exam.correctAnswers;
  
  // 점수 상태 표시
  const statusElement = document.getElementById('scoreStatus');
  if (score >= 60) {
    statusElement.textContent = '합격!';
    statusElement.style.color = 'var(--color-success)';
  } else {
    statusElement.textContent = '불합격';
    statusElement.style.color = 'var(--color-error)';
  }
  
  // 오답 노트 생성
  createWrongAnswersNote();
  
  // 시험 모드 초기화
  appState.examMode.examStarted = false;
}

function createWrongAnswersNote() {
  const wrongAnswers = appState.examMode.userAnswers.filter(answer => !answer.isCorrect);
  const container = document.getElementById('wrongAnswers');
  
  if (wrongAnswers.length === 0) {
    container.innerHTML = '<h3>오답 노트</h3><p>모든 문제를 맞혔습니다! 🎉</p>';
    return;
  }
  
  let html = '<h3>오답 노트</h3>';
  
  wrongAnswers.forEach((wrongAnswer, index) => {
    html += `
      <div class="wrong-answer-item">
        <div class="wrong-answer-question">${wrongAnswer.question.question}</div>
        <div class="wrong-answer-info">
          <div class="wrong-answer-user">
            <strong>내 답:</strong> ${wrongAnswer.userAnswer}
          </div>
          <div class="wrong-answer-correct">
            <strong>정답:</strong> ${wrongAnswer.question.answer}
          </div>
        </div>
        <div class="wrong-answer-explanation">
          <strong>해설:</strong> ${wrongAnswer.question.explanation}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// 과목별 진도 초기화
function initializeSubjectProgress() {
  questionData.subjects.forEach(subject => {
    if (!appState.statistics.subjectProgress[subject]) {
      appState.statistics.subjectProgress[subject] = { solved: 0, correct: 0 };
    }
  });
}

// 과목별 진도 업데이트
function updateSubjectProgress() {
  const container = document.getElementById('subjectProgress');
  let html = '<h3>과목별 학습 현황</h3>';
  
  questionData.subjects.forEach(subject => {
    const questions = questionData.questions[subject] || [];
    const progress = appState.statistics.subjectProgress[subject] || { solved: 0, correct: 0 };
    const totalQuestions = questions.length;
    const solvedPercent = totalQuestions > 0 ? Math.round((progress.solved / totalQuestions) * 100) : 0;
    const accuracy = progress.solved > 0 ? Math.round((progress.correct / progress.solved) * 100) : 0;
    
    html += `
      <div class="subject-progress-item">
        <div class="subject-progress-header">
          <h4>${subject}</h4>
          <span>${progress.solved}/${totalQuestions} (${solvedPercent}%)</span>
        </div>
        <div class="subject-progress-bar">
          <div class="subject-progress-fill" style="width: ${solvedPercent}%"></div>
        </div>
        <div style="margin-top: 8px; font-size: 14px; color: var(--color-text-secondary);">
          정답률: ${accuracy}%
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// 엔터키로 답안 제출
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && appState.currentScreen === 'examScreen') {
    const nextBtn = document.getElementById('nextBtn');
    const checkBtn = document.querySelector('.btn--primary');
    
    if (nextBtn.style.display !== 'none') {
      nextQuestion();
    } else if (checkBtn.style.display !== 'none') {
      checkAnswer();
    }
  }
});

// 모달 외부 클릭 시 닫기
document.getElementById('answerModal').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});