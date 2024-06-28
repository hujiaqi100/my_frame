ASSETS_DIR=assets
ROOT_DIR=.

all: install_assets install_root
install_root:
	@echo "Running yarn in $(ROOT_DIR) directory..."
	@yarn
	
install_assets:
	@echo "Running yarn in $(ASSETS_DIR) directory..."
	@cd $(ASSETS_DIR) && yarn



.PHONY: all install_assets install_root