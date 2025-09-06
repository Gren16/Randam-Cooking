FROM ruby:3.2.9

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y \
    nodejs \
    npm \
    postgresql-client \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /app

# Bundlerの設定
ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"

# GemfileとGemfile.lockをコピー
COPY Gemfile Gemfile.lock ./

# Gemをインストール
RUN bundle install

# アプリケーションコードをコピー
COPY . .

# ポートを公開
EXPOSE 3001

# サーバーを起動
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
