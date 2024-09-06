NAME			= node-compose

DOCKER_COMPOSE	= docker-compose
DOCKER			= docker

all:			fclean
				${DOCKER_COMPOSE} build
				${DOCKER_COMPOSE} up -d

check:			fclean
				${DOCKER_COMPOSE} up --build

ls:
				${DOCKER} ps

build: 
				${DOCKER_COMPOSE} build

up:
				${DOCKER_COMPOSE} up -d
	
down:
				${DOCKER_COMPOSE} down

pause:
				${DOCKER_COMPOSE} pause

unpause:
				${DOCKER_COMPOSE} unpause

clean:			down
				${DOCKER_COMPOSE} down -v --rmi all --remove-orphans

fclean: 		clean
				${DOCKER} system prune -f

re:				fclean all