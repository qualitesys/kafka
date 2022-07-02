console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java 130 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.common.network.KafkaChannel"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.KafkaChannel" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaChannel"
 , "c2" : "KafkaChannel(String;TransportLayer;Supplier<Authenticator>;int;MemoryPool;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KafkaPrincipal"
 , "c2" : "principal()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<KafkaPrincipalSerde>"
 , "c2" : "principalSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepare()"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "disconnect()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "state(ChannelState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ChannelState"
 , "c2" : "state()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "finishConnect()"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isConnected()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "id()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SelectionKey"
 , "c2" : "selectionKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "mute()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeUnmute()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleChannelMuteEvent(ChannelMuteEvent)"
 , "c3" : "12"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "ChannelMuteState"
 , "c2" : "muteState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "delayCloseOnAuthenticationFailure()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeCloseOnAuthenticationFailure()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isMuted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isInMutableState()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "ready()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasSend()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InetAddress"
 , "c2" : "socketAddress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "socketDescription()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setSend(NetworkSend)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "NetworkSend"
 , "c2" : "maybeCompleteSend()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "read()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "currentReceive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "maybeCompleteReceive()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "write()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addNetworkThreadTimeNanos(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getAndResetNetworkThreadTimeNanos()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "receive(NetworkReceive)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasBytesBuffered()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "successfulAuthentications()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeBeginServerReauthentication(NetworkReceive;Supplier<Long>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeBeginClientReauthentication(Supplier<Long>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "reauthenticationLatencyMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "serverAuthenticationSessionExpired(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Optional<NetworkReceive>"
 , "c2" : "pollResponseReceivedDuringReauthentication()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "connectedClientSupportsReauthentication()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "swapAuthenticatorsAndBeginReauthentication(ReauthenticationContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ChannelMetadataRegistry"
 , "c2" : "channelMetadataRegistry()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "32"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "58"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class KafkaChannel contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument authenticatorCreator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.network.KafkaChannel.KafkaChannel@POLYN270584 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.network.KafkaChannel.KafkaChannel@POLYN270584 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.network.KafkaChannel.close@POLYN271537 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.network.KafkaChannel.disconnect@POLYN273447 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.network.KafkaChannel.disconnect@POLYN273447 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method state arguments ChannelState  state"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00136] For method finishConnect list of called methods Object monObjet|java.nio.channels.SocketChannel transportLayer_socketChannelN274192|boolean transportLayer_finishConnectN274417"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.network.KafkaChannel.finishConnect@POLYN274105 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.network.KafkaChannel.finishConnect@POLYN274105 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method handleChannelMuteEvent arguments ChannelMuteEvent  event"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument event is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00211] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  'Cannot transition from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.network.KafkaChannel.handleChannelMuteEvent@POLYN276201 the MagicNumber/String  ' for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.common.network.KafkaChannel.isInMutableState@POLYN278782 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.common.network.KafkaChannel.isInMutableState@POLYN278782 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.common.network.KafkaChannel.hasSend@POLYN279171 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00271] For method socketDescription list of called methods Object monObjet|java.nio.channels.SocketChannel transportLayer_socketChannelN279687"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN279612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method setSend arguments NetworkSend  send"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.common.network.KafkaChannel.setSend@POLYN279976 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.common.network.KafkaChannel.setSend@POLYN279976 the MagicNumber/String  'Attempt to begin a send operation with prior send operation still in progress, connection id is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteSend@POLYN280363 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteSend@POLYN280363 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteSend@POLYN280363 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteSend@POLYN280363 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00296] For method read list of called methods Object monObjet|long receiveN281147"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.common.network.KafkaChannel.read@POLYN280848 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.common.network.KafkaChannel.write@POLYN281983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.network.KafkaChannel.write@POLYN281983 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.common.network.KafkaChannel.write@POLYN281983 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method addNetworkThreadTimeNanos arguments long  nanos"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.common.network.KafkaChannel.getAndResetNetworkThreadTimeNanos@POLYN282501 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#344"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00344] For method receive arguments NetworkReceive  receive"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#344"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00344] The argument receive is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.common.network.KafkaChannel.receive@POLYN282698 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.common.network.KafkaChannel.receive@POLYN282698 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#362"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00362] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00366] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.common.network.KafkaChannel.toString@POLYN284106 the MagicNumber/String  ' id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method maybeBeginServerReauthentication arguments NetworkReceive  saslHandshakeNetworkReceive|Supplier&lt;Long &gt;  nowNanosSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#390"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00390] The argument nowNanosSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  'KafkaChannel should be \'ready\' when processing SASL Handshake for potential re-authentication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00410] For method maybeBeginClientReauthentication arguments Supplier&lt;Long &gt;  nowNanosSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#410"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00410] The argument nowNanosSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  'KafkaChannel should always be \'ready\' when it is checked for possible re-authentication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#433"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00433] For method serverAuthenticationSessionExpired arguments long  nowNanos"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.common.network.KafkaChannel.serverAuthenticationSessionExpired@POLYN289077 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.common.network.KafkaChannel.serverAuthenticationSessionExpired@POLYN289077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method swapAuthenticatorsAndBeginReauthentication arguments ReauthenticationContext  reauthenticationContext"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.read@POLYN280848"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.KafkaChannel@POLYN270584"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.completeCloseOnAuthenticationFailure@POLYN278400"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.connectedClientSupportsReauthentication@POLYN290048"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.disconnect@POLYN273447"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.finishConnect@POLYN274105"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.hashCode@POLYN283986"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.pollResponseReceivedDuringReauthentication@POLYN289750"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.principal@POLYN271860"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.principalSerde@POLYN271987"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.reauthenticationLatencyMs@POLYN288699"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.receive@POLYN282698"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN279612"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.KafkaChannel.swapAuthenticatorsAndBeginReauthentication@POLYN290146"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.common.network.KafkaChannel.prepare@POLYN272249 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.common.network.KafkaChannel.read@POLYN280848 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.common.network.KafkaChannel.KafkaChannel@POLYN270584 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.common.network.KafkaChannel.KafkaChannel@POLYN270584 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.common.network.KafkaChannel.disconnect@POLYN273447 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.common.network.KafkaChannel.disconnect@POLYN273447 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#364"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00364] In the recursive method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.common.network.KafkaChannel.equals@POLYN283449 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.common.network.KafkaChannel.finishConnect@POLYN274105 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.common.network.KafkaChannel.finishConnect@POLYN274105 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00414] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String 'KafkaChannel should always be \'ready\' when it is checked for possible re-authentication' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00421] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00423] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginClientReauthentication@POLYN287393 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String 'KafkaChannel should be \'ready\' when processing SASL Handshake for potential re-authentication' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00396] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00406] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeBeginServerReauthentication@POLYN285330 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00318] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.common.network.KafkaChannel.maybeCompleteReceive@POLYN281561 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00350] In the recursive method org.apache.kafka.common.network.KafkaChannel.receive@POLYN282698 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00350] In the recursive method org.apache.kafka.common.network.KafkaChannel.receive@POLYN282698 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/KafkaChannel.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN279612 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
