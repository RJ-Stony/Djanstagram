# 📸 Djanstagram

**Django로 만드는 나만의 감성 인스타그램 클론.**  
Djanstagram은 사진 업로드, 피드, 댓글 기능이 포함된 SNS 서비스로, Django 프레임워크의 핵심 기능을 활용해 쉽고 빠르게 구축할 수 있습니다.

<br/>

## 🔥 Features

- 📷 **사진 업로드 및 피드 생성**: 유저가 이미지와 설명을 등록하고 타임라인 형태로 확인
- 💬 **댓글 기능**: 게시글에 대한 커뮤니케이션 지원
- 🧠 **Form 기반 유저 인터랙션**: Django forms로 간편한 유저 입력 처리
- 🛠️ **Django Admin 연동**: 관리자 페이지에서 콘텐츠 관리 가능

<br/>

## 🚀 Tech Stack

- **Framework**: Django 5.2
- **Language**: Python 3.12
- **Database**: SQLite3 (기본 내장)
- **Frontend**: Django Templates + HTML/CSS

<br/>

## 🗂 프로젝트 구조

```
pystagram/
├── config/         # Django 기본 설정
├── posts/          # 피드 및 게시글 관련 앱
├── users/          # 사용자 관련 앱
├── db.sqlite3      # 로컬 개발용 데이터베이스
├── manage.py       # Django 매니지먼트 스크립트
```

<br/>

## ⚙️ 로컬 실행 방법

```bash
# 1. 가상환경 생성 및 활성화
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. 패키지 설치
pip install -r requirements.txt

# 3. 마이그레이션 및 실행
python manage.py migrate
python manage.py runserver
```

<br/>

## 💡 향후 기능 계획

- REST API 기반 모바일 연동

<br/>
