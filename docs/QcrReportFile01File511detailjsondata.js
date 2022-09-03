console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/Selector.java 429 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Selectable"
 , "c2" : "org.apache.kafka.common.network.Selector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.Selector" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(int;long;int;Metrics;Time;String;Map<String,String>;boolean;boolean;ChannelBuilder;MemoryPool;LogContext)"
 , "c3" : "1"
 , "c4" : "24"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(int;long;Metrics;Time;String;Map<String,String>;boolean;boolean;ChannelBuilder;MemoryPool;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(int;long;int;Metrics;Time;String;Map<String,String>;boolean;ChannelBuilder;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(int;long;Metrics;Time;String;Map<String,String>;boolean;ChannelBuilder;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(long;Metrics;Time;String;ChannelBuilder;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Selector"
 , "c2" : "Selector(long;int;Metrics;Time;String;ChannelBuilder;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "connect(String;InetSocketAddress;int;int)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "doConnect(SocketChannel;InetSocketAddress)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "configureSocketChannel(SocketChannel;int;int)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "register(String;SocketChannel)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "ensureNotRegistered(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SelectionKey"
 , "c2" : "registerChannel(String;SocketChannel;int)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "buildAndAttachKafkaChannel(SocketChannel;String;SelectionKey)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "send(NetworkSend)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "poll(long)"
 , "c3" : "9"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "pollSelectionKeys(Set<SelectionKey>;boolean;long)"
 , "c3" : "26"
 , "c4" : "44"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "attemptWrite(SelectionKey;KafkaChannel;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "write(KafkaChannel)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Collection<SelectionKey>"
 , "c2" : "determineHandlingOrder(Set<SelectionKey>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "attemptRead(KafkaChannel)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "maybeReadFromClosingChannel(KafkaChannel)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeRecordTimePerConnection(KafkaChannel;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<NetworkSend>"
 , "c2" : "completedSends()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Collection<NetworkReceive>"
 , "c2" : "completedReceives()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<String,ChannelState>"
 , "c2" : "disconnected()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<String>"
 , "c2" : "connected()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "mute(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "mute(KafkaChannel)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "unmute(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "unmute(KafkaChannel)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "muteAll()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "unmuteAll()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "completeDelayedChannelClose(long)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeCloseOldestConnection(long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "clearCompletedReceives()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "clearCompletedSends()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "select(long)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close(String)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeDelayCloseOnAuthenticationFailure(KafkaChannel)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "handleCloseOnAuthenticationFailure(KafkaChannel)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close(KafkaChannel;CloseMode)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "doClose(KafkaChannel;boolean)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isChannelReady(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "openOrClosingChannelOrFail(String)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<KafkaChannel>"
 , "c2" : "channels()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "channel(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "closingChannel(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "lowestPriorityChannel()"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaChannel"
 , "c2" : "channel(SelectionKey)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "hasCompletedReceive(KafkaChannel)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addToCompletedReceives(KafkaChannel;NetworkReceive;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Set<SelectionKey>"
 , "c2" : "keys()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isOutOfMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isMadeReadProgressLastPoll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<?,?>"
 , "c2" : "delayedClosingChannels()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "40"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "36"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "253"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "51"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00044] The class Selector contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument memoryPool is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.network.Selector.Selector@POLYN395466 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.network.Selector.Selector@POLYN395466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.network.Selector.Selector@POLYN395466 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.network.Selector.Selector@POLYN395466 the MagicNumber/String  0.1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.common.network.Selector.Selector@POLYN395466 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.network.Selector.Selector@POLYN398949 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.network.Selector.Selector@POLYN400132 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.network.Selector.Selector@POLYN400580 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method connect arguments String  id|InetSocketAddress  address|int  sendBufferSize|int  receiveBufferSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String  'Immediately connected to node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#207"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00207] For method doConnect arguments SocketChannel  channel|InetSocketAddress  address"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#207"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00207] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.common.network.Selector.doConnect@POLYN402984 the MagicNumber/String  'Can't resolve address: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method configureSocketChannel arguments SocketChannel  socketChannel|int  sendBufferSize|int  receiveBufferSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument socketChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN403345 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN403345 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN403345 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method register arguments String  id|SocketChannel  socketChannel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.common.network.Selector.register@POLYN404564 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#239"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00239] For method ensureNotRegistered arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.common.network.Selector.ensureNotRegistered@POLYN405185 the MagicNumber/String  'There is already a connection for id ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.network.Selector.ensureNotRegistered@POLYN405185 the MagicNumber/String  'There is already a connection for id ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.network.Selector.ensureNotRegistered@POLYN405185 the MagicNumber/String  ' that is still being closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method registerChannel arguments String  id|SocketChannel  socketChannel|int  interestedOps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00246] For method registerChannel list of called methods Object monObjet|org.apache.kafka.common.network.KafkaChannel buildAndAttachKafkaChannelN405911"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#246"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00246] The argument socketChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.network.Selector.registerChannel@POLYN405636 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00255] For method buildAndAttachKafkaChannel arguments SocketChannel  socketChannel|String  id|SelectionKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#255"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00255] The argument socketChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#255"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00255] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.common.network.Selector.buildAndAttachKafkaChannel@POLYN406346 the MagicNumber/String  'Channel could not be created for socket ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.common.network.Selector.close@POLYN407339 the MagicNumber/String  'release connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.common.network.Selector.close@POLYN407339 the MagicNumber/String  'nioSelector' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.common.network.Selector.close@POLYN407339 the MagicNumber/String  'sensors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.network.Selector.close@POLYN407339 the MagicNumber/String  'channelBuilder' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#298"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00298] For method send arguments NetworkSend  send"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#298"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00298] For method send list of called methods Object monObjet|String send_destinationIdN408774|org.apache.kafka.common.network.KafkaChannel openOrClosingChannelOrFailN408849"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#298"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00298] The argument send is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.common.network.Selector.send@POLYN408681 the MagicNumber/String  'Unexpected exception during send, closing connection {} and rethrowing exception {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00324] For method poll arguments long  timeout"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00324] For method poll list of called methods Object monObjet|int selectN412434"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  'timeout should be &amp;gt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  'Broker no longer low on memory - unmuting incoming sockets' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.common.network.Selector.poll@POLYN411232 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#388"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00388] For method pollSelectionKeys arguments Set&lt;SelectionKey &gt;  selectionKeys|boolean  isImmediatelyConnected|long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#388"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00388] For method pollSelectionKeys list of called methods Object monObjet|String channel_idN414830"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00392] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00395] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00409] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00409] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00445] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00473] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00482] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00483] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00484] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00486] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00493] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00501] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Created socket with SO_RCVBUF = {}, SO_SNDBUF = {}, SO_TIMEOUT = {} to node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Should never happen: re-authentication latency for a re-authenticated channel was null; continuing...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Successfully {}authenticated with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  're-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  '%s (channelId=%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Connection with {} disconnected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Failed {}authentication with {} ({})' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  're-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String  'Unexpected error from {}; closing connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#511"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00511] For method attemptWrite arguments SelectionKey  key|KafkaChannel  channel|long  nowNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#511"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00511] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#511"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00511] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00521] For method write arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00521] For method write list of called methods Object monObjet|String channel_idN421221|long channel_writeN421296|org.apache.kafka.common.network.NetworkSend channel_maybeCompleteSendN421371"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#521"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00521] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.common.network.Selector.write@POLYN421116 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.common.network.Selector.write@POLYN421116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.common.network.Selector.write@POLYN421116 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.common.network.Selector.write@POLYN421116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#538"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00538] For method determineHandlingOrder arguments Set&lt;SelectionKey &gt;  selectionKeys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00550] For method attemptRead arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00550] For method attemptRead list of called methods Object monObjet|String channel_idN422725|long channel_readN422800|org.apache.kafka.common.network.NetworkReceive channel_maybeCompleteReceiveN423194"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#550"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00550] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00554] In method org.apache.kafka.common.network.Selector.attemptRead@POLYN422620 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.common.network.Selector.attemptRead@POLYN422620 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.common.network.Selector.attemptRead@POLYN422620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.common.network.Selector.attemptRead@POLYN422620 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.common.network.Selector.attemptRead@POLYN422620 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#571"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00571] For method maybeReadFromClosingChannel arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#571"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00571] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String  'Read from closing channel failed, ignoring exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00583] In method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#590"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00590] For method maybeRecordTimePerConnection arguments KafkaChannel  channel|long  startTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#590"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00590] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00616"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#616"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00616] For method mute arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00616"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#616"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00616] For method mute list of called methods Object monObjet|org.apache.kafka.common.network.KafkaChannel openOrClosingChannelOrFailN425400"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#621"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00621] For method mute arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#621"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00621] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00628] For method unmute arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00628] For method unmute list of called methods Object monObjet|org.apache.kafka.common.network.KafkaChannel openOrClosingChannelOrFailN425903"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#633"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00633] For method unmute arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#633"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00633] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#656"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00656] For method completeDelayedChannelClose arguments long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00661] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00657"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.common.network.Selector.completeDelayedChannelClose@POLYN426800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00667"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#667"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00667] For method maybeCloseOldestConnection arguments long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00677"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#677"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00677] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  'About to close the idle connection from {} due to being idle for {} millis' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.common.network.Selector.maybeCloseOldestConnection@POLYN427227 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#696"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00696] For method clear list of called methods Object monObjet|boolean maybeReadFromClosingChannelN430067"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00704] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00706"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#706"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00706] In method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00710"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00710] In method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00722"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#722"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00722] For method select arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00723"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#723"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00723] In method org.apache.kafka.common.network.Selector.select@POLYN430788 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.common.network.Selector.select@POLYN430788 the MagicNumber/String  'timeout should be &amp;gt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00726"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#726"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00726] In method org.apache.kafka.common.network.Selector.select@POLYN430788 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#733"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00733] For method close arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.common.network.Selector.close@POLYN431246 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00743"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#743"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00743] In method org.apache.kafka.common.network.Selector.close@POLYN431246 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#744"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00744] In method org.apache.kafka.common.network.Selector.close@POLYN431246 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#748"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00748] For method maybeDelayCloseOnAuthenticationFailure arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#748"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00748] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00750] In method org.apache.kafka.common.network.Selector.maybeDelayCloseOnAuthenticationFailure@POLYN431929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#756"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00756] For method handleCloseOnAuthenticationFailure arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#756"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00756] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#760"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00760] In method org.apache.kafka.common.network.Selector.handleCloseOnAuthenticationFailure@POLYN432331 the MagicNumber/String  'Exception handling close on authentication failure node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#767"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00767] For method close arguments KafkaChannel  channel|CloseMode  closeMode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#767"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00767] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#767"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00767] The argument closeMode is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#782"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00782] In method org.apache.kafka.common.network.Selector.close@POLYN433071 the MagicNumber/String  'Tracking closing connection {} to process outstanding requests' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.common.network.Selector.close@POLYN433071 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.common.network.Selector.close@POLYN433071 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#795"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00795] For method doClose arguments KafkaChannel  channel|boolean  notifyDisconnect"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#795"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00795] For method doClose list of called methods Object monObjet|java.nio.channels.SelectionKey channel_selectionKeyN434294"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#795"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00795] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#802"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00802] In method org.apache.kafka.common.network.Selector.doClose@POLYN434176 the MagicNumber/String  'Exception closing connection to node {}:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#805"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00805] In method org.apache.kafka.common.network.Selector.doClose@POLYN434176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00816"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#816"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00816] For method isChannelReady arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00818"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.common.network.Selector.isChannelReady@POLYN435265 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#821"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00821] For method openOrClosingChannelOrFail arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.common.network.Selector.openOrClosingChannelOrFail@POLYN435543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00825"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#825"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00825] In method org.apache.kafka.common.network.Selector.openOrClosingChannelOrFail@POLYN435543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00826] In method org.apache.kafka.common.network.Selector.openOrClosingChannelOrFail@POLYN435543 the MagicNumber/String  'Attempt to retrieve channel for which there is no connection. Connection id ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00826] In method org.apache.kafka.common.network.Selector.openOrClosingChannelOrFail@POLYN435543 the MagicNumber/String  ' existing connections ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#836"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00836] For method channel arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00841"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#841"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00841] For method closingChannel arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#846"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00846] For method lowestPriorityChannel list of called methods Object monObjet|org.apache.kafka.common.network.KafkaChannel channels_valuesN437885"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00847] In method org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00860] For method channel arguments SelectionKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#860"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00860] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00865"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#865"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00865] For method hasCompletedReceive arguments KafkaChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00865"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#865"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00865] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#870"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00870] For method addToCompletedReceives arguments KafkaChannel  channel|NetworkReceive  networkReceive|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#870"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00870] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#870"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00870] The argument networkReceive is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.common.network.Selector.addToCompletedReceives@POLYN438440 the MagicNumber/String  'Attempting to add second completed receive to channel ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00884"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#884"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00884] The class SelectorChannelMetadataRegistry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00889"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#889"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00889] For method registerCipherInformation arguments CipherInformation  cipherInformation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00890"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#890"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00890] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.registerCipherInformation@POLYN439321 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#906"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00906] For method registerClientInformation arguments ClientInformation  clientInformation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00907"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#907"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00907] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.registerClientInformation@POLYN439916 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.close@POLYN440511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#926"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00926] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.close@POLYN440511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.close@POLYN440511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00931"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00931] In method org.apache.kafka.common.network.Selector.SelectorChannelMetadataRegistry.close@POLYN440511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00936"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00936] The class SelectorMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#965"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00965] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#965"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00965] The argument metricTags is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00969"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  '-metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#970"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00970] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  '-node-metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00975"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#975"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00975] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections-closed:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connection-close' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections-created:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connection-creation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'new connections established' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00987"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00987] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-authentication:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections with successful authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00991"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#991"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00991] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-reauthentication:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00993] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-reauthentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00993] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful re-authentication of connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00995"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#995"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00995] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-authentication-no-reauth:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'successful-authentication-no-reauth-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00998"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The total number of connections with successful authentication where the client does not support re-authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01002"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01002] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'failed-authentication:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'failed-authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections with failed authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1006"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01006] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'failed-reauthentication:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'failed-reauthentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'failed re-authentication of connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01010] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'reauthentication-latency:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1011"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01011] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'reauthentication-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01012] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The max latency observed due to re-authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1015"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01015] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'reauthentication-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1016"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01016] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The average latency observed due to re-authentication' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1020"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01020] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'bytes-sent-received:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'network-io' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'network operations (reads or writes) on all connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'bytes-sent:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1026"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01026] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'outgoing-byte' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1026"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01026] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'outgoing bytes sent to all servers' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'requests-sent:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01030] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01030] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'requests sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'request-size-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The average size of requests sent.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'request-size-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The maximum size of any request sent.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1036"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01036] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'bytes-received:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'incoming-byte' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'bytes read off all sockets' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01040] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'responses-received:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01042] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01042] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'responses received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01044] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'select-time:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01046] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'select' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01046] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'times the I/O layer checked for new I/O to perform' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1047"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01047] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io-wait-time-ns-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1047"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01047] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The average length of time the I/O thread spent waiting for a socket ready for reads or writes in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1049"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01049] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io-wait' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1049"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01049] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'waiting' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io-wait' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'waiting' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io-time:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io-time-ns-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The average length of time for I/O per select call in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01055] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01055] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'doing I/O' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'io' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'doing I/O' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'sslCiphers' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01061] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'cipher' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01062] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'protocol' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01064] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01064] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The number of connections with this SSL cipher and protocol.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01067] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'clients' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'clientSoftwareName' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01071] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'clientSoftwareVersion' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01073] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01073] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The number of connections with this client and version.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1074"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01074] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01076] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'connection-count' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01076] In method org.apache.kafka.common.network.Selector.SelectorMetrics.SelectorMetrics@POLYN442386 the MagicNumber/String  'The current number of active connections.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1081"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01081] For method createMeter arguments Metrics  metrics|String  groupName|Map&lt;String ,String &gt;  metricTags|SampledStat  stat|String  baseName|String  descriptiveName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1081"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01081] For method createMeter list of called methods Object monObjet|java.util.Set&lt;java.nio.channels.SelectionKey&gt; metrics_metricNameN453129"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1081"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01081] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1083"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01083] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN452623 the MagicNumber/String  '-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1084"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01084] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN452623 the MagicNumber/String  'The number of %s per second' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1085"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01085] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN452623 the MagicNumber/String  '-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1086"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01086] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN452623 the MagicNumber/String  'The total number of %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01087] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN452623 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1093"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01093] For method createMeter arguments Metrics  metrics|String  groupName|Map&lt;String ,String &gt;  metricTags|String  baseName|String  descriptiveName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01095] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createMeter@POLYN453621 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01100] For method createIOThreadRatioMeterLegacy arguments Metrics  metrics|String  groupName|Map&lt;String ,String &gt;  metricTags|String  baseName|String  action"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01100] For method createIOThreadRatioMeterLegacy list of called methods Object monObjet|java.util.Set&lt;java.nio.channels.SelectionKey&gt; metrics_metricNameN454716"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01100] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01102] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeterLegacy@POLYN454235 the MagicNumber/String  '-ratio' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01103] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeterLegacy@POLYN454235 the MagicNumber/String  '*Deprecated* The fraction of time the I/O thread spent %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01104] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeterLegacy@POLYN454235 the MagicNumber/String  'time-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01105] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeterLegacy@POLYN454235 the MagicNumber/String  '*Deprecated* The total time the I/O thread spent %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01109] For method createIOThreadRatioMeter arguments Metrics  metrics|String  groupName|Map&lt;String ,String &gt;  metricTags|String  baseName|String  action"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01109] For method createIOThreadRatioMeter list of called methods Object monObjet|java.util.Set&lt;java.nio.channels.SelectionKey&gt; metrics_metricNameN455545"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01109] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01111] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeter@POLYN455064 the MagicNumber/String  '-ratio' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeter@POLYN455064 the MagicNumber/String  'The fraction of time the I/O thread spent %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01113] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeter@POLYN455064 the MagicNumber/String  '-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01114] In method org.apache.kafka.common.network.Selector.SelectorMetrics.createIOThreadRatioMeter@POLYN455064 the MagicNumber/String  'The total time the I/O thread spent %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01118] For method sensor arguments String  name|Sensor  ...parents"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01118] For method sensor list of called methods Object monObjet|java.util.Set&lt;java.nio.channels.SelectionKey&gt; metrics_sensorN456018"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01124] For method maybeRegisterConnectionMetrics arguments String  connectionId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01124] For method maybeRegisterConnectionMetrics list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor sensorN456939|org.apache.kafka.common.metrics.Sensor metrics_metricNameN457535|org.apache.kafka.common.metrics.Sensor sensorN457914|org.apache.kafka.common.metrics.Sensor sensorN458297|org.apache.kafka.common.metrics.Sensor sensorN458721|org.apache.kafka.common.metrics.Sensor sensorN459104|org.apache.kafka.common.metrics.Sensor metrics_metricNameN459189"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01124] The argument connectionId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01128] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01128] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  '.requests-sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01132] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01132] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01135] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01135] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'requests sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'request-size-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'The average size of requests sent.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'request-size-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'The maximum size of any request sent.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01141] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01141] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  '.bytes-sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'outgoing-byte' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'outgoing bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  '.responses-received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01147] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'response' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01147] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'responses received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01149] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01149] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  '.bytes-received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01151] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'incoming-byte' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01151] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'incoming bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01153] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01153] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  '.latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'request-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01157] In method org.apache.kafka.common.network.Selector.SelectorMetrics.maybeRegisterConnectionMetrics@POLYN456208 the MagicNumber/String  'request-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01163] For method recordBytesSent arguments String  connectionId|long  bytes|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01163] The argument connectionId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01166] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesSent@POLYN459668 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01166] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesSent@POLYN459668 the MagicNumber/String  '.bytes-sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01168] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesSent@POLYN459668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01173] For method recordCompletedSend arguments String  connectionId|long  totalBytes|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01173] The argument connectionId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01176] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedSend@POLYN460323 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01176] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedSend@POLYN460323 the MagicNumber/String  '.requests-sent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01178] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedSend@POLYN460323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01183] For method recordBytesReceived arguments String  connectionId|long  bytes|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01183] The argument connectionId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01186] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesReceived@POLYN460968 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01186] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesReceived@POLYN460968 the MagicNumber/String  '.bytes-received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01188] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordBytesReceived@POLYN460968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01193] For method recordCompletedReceive arguments String  connectionId|long  totalBytes|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1193"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01193] The argument connectionId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01196] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedReceive@POLYN461623 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01196] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedReceive@POLYN461623 the MagicNumber/String  '.responses-received' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01198] In method org.apache.kafka.common.network.Selector.SelectorMetrics.recordCompletedReceive@POLYN461623 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01214] The class DelayedAuthenticationFailureClose contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01222] In method org.apache.kafka.common.network.Selector.DelayedAuthenticationFailureClose.DelayedAuthenticationFailureClose@POLYN463027 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01222] In method org.apache.kafka.common.network.Selector.DelayedAuthenticationFailureClose.DelayedAuthenticationFailureClose@POLYN463027 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01223] In method org.apache.kafka.common.network.Selector.DelayedAuthenticationFailureClose.DelayedAuthenticationFailureClose@POLYN463027 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01227] For method tryClose arguments long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01236] In method org.apache.kafka.common.network.Selector.DelayedAuthenticationFailureClose.closeNow@POLYN463835 the MagicNumber/String  'Attempt to close a channel that has already been closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01238] In method org.apache.kafka.common.network.Selector.DelayedAuthenticationFailureClose.closeNow@POLYN463835 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01243] The class IdleExpiryManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1248"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01248] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01249] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.IdleExpiryManager@POLYN464306 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01249] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.IdleExpiryManager@POLYN464306 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.IdleExpiryManager@POLYN464306 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.IdleExpiryManager@POLYN464306 the MagicNumber/String  .75F should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.IdleExpiryManager@POLYN464306 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01255] For method update arguments String  connectionId|long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1259"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01259] For method pollExpiredConnection arguments long  currentTimeNanos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01261] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.pollExpiredConnection@POLYN465018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01265] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.pollExpiredConnection@POLYN465018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01275] In method org.apache.kafka.common.network.Selector.IdleExpiryManager.pollExpiredConnection@POLYN465018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01278] For method remove arguments String  connectionId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.common.network.Selector.registerChannel@POLYN405636 ending with method org.apache.kafka.common.network.Selector.register@POLYN404564"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.common.network.Selector.registerChannel@POLYN405636"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.common.network.Selector.register@POLYN404564"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.doClose@POLYN434176"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.connect@POLYN401623"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.clear@POLYN429207"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.common.network.Selector.register@POLYN404564 ending with method org.apache.kafka.common.network.Selector.registerChannel@POLYN405636"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.common.network.Selector.register@POLYN404564"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.common.network.Selector.registerChannel@POLYN405636"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.send@POLYN408681"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437144"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.common.network.Selector.registerChannel@POLYN405636 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.common.network.Selector.register@POLYN404564 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00802] In the recursive method org.apache.kafka.common.network.Selector.doClose@POLYN434176 the MagicNumber/String 'Exception closing connection to node {}:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00805] In the recursive method org.apache.kafka.common.network.Selector.doClose@POLYN434176 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String 'Immediately connected to node {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00194] In the recursive method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.common.network.Selector.connect@POLYN401623 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00706"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00706] In the recursive method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00710"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00710] In the recursive method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00718] In the recursive method org.apache.kafka.common.network.Selector.clear@POLYN429207 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00574] In the recursive method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00576] In the recursive method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00582] In the recursive method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String 'Read from closing channel failed, ignoring exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#583"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00583] In the recursive method org.apache.kafka.common.network.Selector.maybeReadFromClosingChannel@POLYN423636 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00399] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Created socket with SO_RCVBUF = {}, SO_SNDBUF = {}, SO_TIMEOUT = {} to node {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00425] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 1.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00428] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00430] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Should never happen: re-authentication latency for a re-authenticated channel was null; continuing...' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00435] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 1.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 1.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00439] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Successfully {}authenticated with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 're-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00470] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#474"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00474] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00483] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String '%s -channelId=%s-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00485] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Connection with {} disconnected' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00487] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00495] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00495] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Failed {}authentication with {} -{}-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00495] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 're-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.common.network.Selector.pollSelectionKeys@POLYN414297 the MagicNumber/String 'Unexpected error from {}; closing connection' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00314] In the recursive method org.apache.kafka.common.network.Selector.send@POLYN408681 the MagicNumber/String 'Unexpected exception during send, closing connection {} and rethrowing exception {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#847"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00847] In the recursive method org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437144 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Selector.java.html#850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00850] In the recursive method org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437144 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
