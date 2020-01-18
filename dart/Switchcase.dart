void main (){
  String command = 'OPEN';
  switch(command) {
    ///每个case 都需要break ，空case 可以不需要break
    case 'CLOSED':
      executeClosed();
            break;
    case 'PENDING':
      executePending();
            break;
    case 'APPROVED':
      executeApproved();
            break;
                    }
                  }
      
      void executeApproved() {
}
      
      void executePending() {
}
      
      void executeClosed() {
}