console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java 287 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TransportLayer"
 , "c2" : "org.apache.kafka.common.network.SslTransportLayer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.SslTransportLayer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SslTransportLayer"
 , "c2" : "create(String;SelectionKey;SSLEngine;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SslTransportLayer"
 , "c2" : "SslTransportLayer(String;SelectionKey;SSLEngine;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startHandshake()"
 , "c3" : "2"
 , "c4" : "9"
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
 , "c2" : "finishConnect()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "disconnect()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SocketChannel"
 , "c2" : "socketChannel()"
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
   "c1" : "boolean"
 , "c2" : "isOpen()"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "6"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPendingWrites()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "readFromSocketChannel()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "flush(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handshake()"
 , "c3" : "9"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "doHandshake()"
 , "c3" : "26"
 , "c4" : "40"
}} 
,
{ "ligne" : {
   "c1" : "SSLHandshakeException"
 , "c2" : "renegotiationException()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IllegalStateException"
 , "c2" : "closingException()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "HandshakeStatus"
 , "c2" : "runDelegatedTasks()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handshakeFinished()"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "SSLEngineResult"
 , "c2" : "handshakeWrap(boolean)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "SSLEngineResult"
 , "c2" : "handshakeUnwrap(boolean;boolean)"
 , "c3" : "6"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "read(ByteBuffer)"
 , "c3" : "28"
 , "c4" : "37"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "read(ByteBuffer[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "read(ByteBuffer[];int;int)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "write(ByteBuffer)"
 , "c3" : "12"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "write(ByteBuffer[];int;int)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "write(ByteBuffer[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Principal"
 , "c2" : "peerPrincipal()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "SSLSession"
 , "c2" : "sslSession()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addInterestOps(int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeInterestOps(int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Runnable"
 , "c2" : "delegatedTask()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "readFromAppBuffer(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "netReadBufferSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "netWriteBufferSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "applicationBufferSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "netReadBuffer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "appReadBuffer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handshakeFailure(SSLException;boolean)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeProcessHandshakeFailure(SSLException;boolean;IOException)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeThrowSslAuthenticationException()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "handshakeWrapAfterFailure(boolean)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearWriteBuffer()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isMute()"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "void"
 , "c2" : "updateBytesBuffered(boolean)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "transferFrom(FileChannel;long;long)"
 , "c3" : "12"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "82"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
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
 , "c4" : "133"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00033] The class SslTransportLayer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method create arguments String  channelId|SelectionKey  key|SSLEngine  sslEngine|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.network.SslTransportLayer.SslTransportLayer@POLYN312129 the MagicNumber/String  '[SslTransportLayer channelId=%s key=%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String  'startHandshake() can only be called once, state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00112] For method finishConnect list of called methods Object monObjet|boolean socketChannel_finishConnectN314216"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  'Remaining data in the network buffer, can't send SSL close message.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  'Unexpected status returned by SSLEngine.wrap, expected CLOSED, received ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  '. Will not send close message to peer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  'Failed to send SSL Close message' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  'fileChannelBuffer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method flush arguments ByteBuffer  buf"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00196] For method flush list of called methods Object monObjet|long socketChannel_writeN317757"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument buf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.network.SslTransportLayer.flush@POLYN317500 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.network.SslTransportLayer.flush@POLYN317500 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  'Process any available bytes from peer, netReadBuffer {} netWriterBuffer {} handshakeStatus {} readable? {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String  'EOF during handshake, handshake status is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00262] For method doHandshake list of called methods Object monObjet|java.nio.ByteBuffer Utils_ensureCapacityN322532|java.nio.ByteBuffer Utils_ensureCapacityN324379|java.nio.ByteBuffer Utils_ensureCapacityN325028"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSLHandshake NEED_TASK channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSLHandshake NEED_WRAP channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'Buffer overflow when available data size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  ') &amp;gt;= network buffer size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'Should not have received BUFFER_UNDERFLOW during handshake WRAP.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSLHandshake NEED_WRAP channelId {}, handshakeResult {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSLHandshake NEED_UNWRAP channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'Buffer underflow when available data size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  ') &amp;gt; packet buffer size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'Buffer underflow when there is available data' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSL handshake status CLOSED during handshake UNWRAP' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'SSLHandshake NEED_UNWRAP channelId {}, handshakeResult {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String  'Unexpected status [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.common.network.SslTransportLayer.renegotiationException@POLYN326552 the MagicNumber/String  'Renegotiation is not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.common.network.SslTransportLayer.closingException@POLYN326678 the MagicNumber/String  'Channel is in closing state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#362"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00362] For method runDelegatedTasks list of called methods Object monObjet|javax.net.ssl.SSLEngineResult.HandshakeStatus delegatedTaskN326970"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00364] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00368] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.common.network.SslTransportLayer.runDelegatedTasks@POLYN326857 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String  'SSL handshake completed successfully with peerHost '{}' peerPort {} peerPrincipal '{}' cipherSuite '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String  'SSLHandshake FINISHED channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String  'NOT_HANDSHAKING during handshake' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00401] For method handshakeWrap arguments boolean  doWrite"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00401] For method handshakeWrap list of called methods Object monObjet|javax.net.ssl.SSLEngineResult runDelegatedTasksN329700"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.common.network.SslTransportLayer.handshakeWrap@POLYN328825 the MagicNumber/String  'SSLHandshake handshakeWrap {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.common.network.SslTransportLayer.handshakeWrap@POLYN328825 the MagicNumber/String  'handshakeWrap called with netWriteBuffer not empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00426] For method handshakeUnwrap arguments boolean  doRead|boolean  ignoreHandshakeStatus"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00426] For method handshakeUnwrap list of called methods Object monObjet|javax.net.ssl.SSLEngineResult readFromSocketChannelN330384|javax.net.ssl.SSLEngineResult runDelegatedTasksN331048"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  'SSLHandshake handshakeUnwrap {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  'SSLHandshake handshakeUnwrap: handshakeStatus {} status {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String  'EOF during handshake, handshake status is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#461"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00461] For method read arguments ByteBuffer  dst"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#461"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00461] For method read list of called methods Object monObjet|long readFromAppBufferN332608|java.nio.ByteBuffer Utils_ensureCapacityN332960|long readFromSocketChannelN333180|long readFromAppBufferN335042|long applicationBufferSizeN335227|java.nio.ByteBuffer Utils_ensureCapacityN335293|long readFromAppBufferN335741|long netReadBufferSizeN335941|java.nio.ByteBuffer Utils_ensureCapacityN336007"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#461"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00461] The argument dst is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00485] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00485] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00502] The same method call unwrapResult.getHandshakeStatus()unwrapResult.getStatus()sslEngine.getSession() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'Failed to process post-handshake messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'Renegotiation requested, but it is not supported, channelId {}, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {} handshakeStatus {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'Buffer overflow when available data size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  ') &amp;gt;= application buffer size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'Buffer underflow when available data size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  ') &amp;gt; packet buffer size (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  'EOF during read' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN332155 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#561"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00561] For method read arguments ByteBuffer[]  dsts"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#561"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00561] The argument dsts is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN337427 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#568"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00568] For method read arguments ByteBuffer[]  dsts|int  offset|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#568"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00568] For method read list of called methods Object monObjet|long readN338825"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#568"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00568] The argument dsts is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN338083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN338083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN338083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.common.network.SslTransportLayer.read@POLYN338083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#592"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00592] For method write arguments ByteBuffer  src"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#592"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00592] For method write list of called methods Object monObjet|java.nio.ByteBuffer Utils_ensureCapacityN340782"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#592"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00592] The argument src is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00601] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN339475 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN339475 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN339475 the MagicNumber/String  'SSL BUFFER_UNDERFLOW during write' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00628] For method write arguments ByteBuffer[]  srcs|int  offset|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00628] For method write list of called methods Object monObjet|long writeN342526"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#628"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00628] The argument srcs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN341750 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN341750 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00631] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN341750 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN341750 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#653"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00653] For method write arguments ByteBuffer[]  srcs"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#653"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00653] The argument srcs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.common.network.SslTransportLayer.write@POLYN343225 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00663"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method org.apache.kafka.common.network.SslTransportLayer.peerPrincipal@POLYN343495 the MagicNumber/String  'SSL peer is not authenticated, returning ANONYMOUS instead' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#675"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00675] For method addInterestOps arguments int  ops"
}} 
,
{ "ligne" : {
   "c1" : "00679"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00679] In method org.apache.kafka.common.network.SslTransportLayer.addInterestOps@POLYN344066 the MagicNumber/String  'handshake is not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#686"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00686] For method removeInterestOps arguments int  ops"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.common.network.SslTransportLayer.removeInterestOps@POLYN344558 the MagicNumber/String  'handshake is not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#702"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00702] For method readFromAppBuffer arguments ByteBuffer  dst"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#702"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00702] The argument dst is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00705"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#705"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00705] In method org.apache.kafka.common.network.SslTransportLayer.readFromAppBuffer@POLYN345203 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#737"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00737] For method handshakeFailure arguments SSLException  sslException|boolean  flush"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00739] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String  'SSL Handshake failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#744"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00744] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String  'SSLEngine.closeInBound() raised an exception.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String  'SSL handshake failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#756"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00756] In method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String  'Delay propagation of handshake exception till {} bytes remaining are flushed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#763"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00763] For method maybeProcessHandshakeFailure arguments SSLException  sslException|boolean  flush|IOException  ioException"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#772"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00772] The argument sslException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00775] The same method call sslException.getMessage() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00775] In method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String  'Unrecognized SSL message' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#776"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00776] In method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String  'Received fatal alert: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String  'SSLException while unwrapping data after IOException, original IOException will be propagated' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.common.network.SslTransportLayer.maybeThrowSslAuthenticationException@POLYN348349 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#793"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00793] For method handshakeWrapAfterFailure arguments boolean  doWrite"
}} 
,
{ "ligne" : {
   "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#795"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00795] In method org.apache.kafka.common.network.SslTransportLayer.handshakeWrapAfterFailure@POLYN348851 the MagicNumber/String  'handshakeWrapAfterFailure status {} doWrite {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#802"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00802] In method org.apache.kafka.common.network.SslTransportLayer.handshakeWrapAfterFailure@POLYN348851 the MagicNumber/String  'Failed to wrap and flush all bytes before closing channel' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String  'Discarding write buffer {} since peer has disconnected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00813"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#813"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00813] In method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#814"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00814] In method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#819"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00819] In method org.apache.kafka.common.network.SslTransportLayer.isMute@POLYN350087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#831"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00831] For method updateBytesBuffered arguments boolean  madeProgress"
}} 
,
{ "ligne" : {
   "c1" : "00833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00833] In method org.apache.kafka.common.network.SslTransportLayer.updateBytesBuffered@POLYN350403 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00833] In method org.apache.kafka.common.network.SslTransportLayer.updateBytesBuffered@POLYN350403 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#835"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00835] In method org.apache.kafka.common.network.SslTransportLayer.updateBytesBuffered@POLYN350403 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#839"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00839] For method transferFrom arguments FileChannel  fileChannel|long  position|long  count"
}} 
,
{ "ligne" : {
   "c1" : "00839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#839"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00839] The argument fileChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#853"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00853] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#857"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00857] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  32768 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00868] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00878] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.runDelegatedTasks@POLYN326857"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshakeWrap@POLYN328825"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.flush@POLYN317500"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.handshakeWrapAfterFailure@POLYN348851"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.readFromAppBuffer@POLYN345203"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.SslTransportLayer@POLYN312129"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.create@POLYN311846"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.disconnect@POLYN314531"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.finishConnect@POLYN314129"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.isConnected@POLYN314966"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.isOpen@POLYN314846"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.peerPrincipal@POLYN343495"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.renegotiationException@POLYN326552"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String 'startHandshake-- can only be called once, state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.common.network.SslTransportLayer.startHandshake@POLYN312996 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00739] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String 'SSL Handshake failed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00744] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String 'SSLEngine.closeInBound-- raised an exception.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#748"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00748] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String 'SSL handshake failed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#756"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00756] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFailure@POLYN346689 the MagicNumber/String 'Delay propagation of handshake exception till {} bytes remaining are flushed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00775] In the recursive method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String 'Unrecognized SSL message' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#776"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00776] In the recursive method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String 'Received fatal alert: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00778] In the recursive method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00781] In the recursive method org.apache.kafka.common.network.SslTransportLayer.maybeProcessHandshakeFailure@POLYN347574 the MagicNumber/String 'SSLException while unwrapping data after IOException, original IOException will be propagated' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00220] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00241] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String 'Process any available bytes from peer, netReadBuffer {} netWriterBuffer {} handshakeStatus {} readable? {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00247] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN318896 the MagicNumber/String 'EOF during handshake, handshake status is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00275] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSLHandshake NEED_TASK channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSLHandshake NEED_WRAP channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00289] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'Buffer overflow when available data size -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String '- &amp;gt;= network buffer size -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'Should not have received BUFFER_UNDERFLOW during handshake WRAP.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSLHandshake NEED_WRAP channelId {}, handshakeResult {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00306] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSLHandshake NEED_UNWRAP channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00309] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00314] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'Buffer underflow when available data size -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String '- &amp;gt; packet buffer size -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'Buffer underflow when there is available data' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00326] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSL handshake status CLOSED during handshake UNWRAP' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00328] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'SSLHandshake NEED_UNWRAP channelId {}, handshakeResult {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.common.network.SslTransportLayer.doHandshake@POLYN321017 the MagicNumber/String 'Unexpected status [%s]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.common.network.SslTransportLayer.runDelegatedTasks@POLYN326857 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeWrap@POLYN328825 the MagicNumber/String 'SSLHandshake handshakeWrap {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeWrap@POLYN328825 the MagicNumber/String 'handshakeWrap called with netWriteBuffer not empty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.common.network.SslTransportLayer.flush@POLYN317500 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.common.network.SslTransportLayer.flush@POLYN317500 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 'SSLHandshake handshakeUnwrap {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00429] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00447] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 'SSLHandshake handshakeUnwrap: handshakeStatus {} status {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00452] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00453] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeUnwrap@POLYN330036 the MagicNumber/String 'EOF during handshake, handshake status is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00387] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String 'SSL handshake completed successfully with peerHost '{}' peerPort {} peerPrincipal '{}' cipherSuite '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String 'SSLHandshake FINISHED channelId {}, appReadBuffer pos {}, netReadBuffer pos {}, netWriteBuffer pos {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00396] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeFinished@POLYN327273 the MagicNumber/String 'NOT_HANDSHAKING during handshake' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00795] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeWrapAfterFailure@POLYN348851 the MagicNumber/String 'handshakeWrapAfterFailure status {} doWrite {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00802] In the recursive method org.apache.kafka.common.network.SslTransportLayer.handshakeWrapAfterFailure@POLYN348851 the MagicNumber/String 'Failed to wrap and flush all bytes before closing channel' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#812"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00812] In the recursive method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String 'Discarding write buffer {} since peer has disconnected' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00813"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#813"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00813] In the recursive method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#814"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00814] In the recursive method org.apache.kafka.common.network.SslTransportLayer.clearWriteBuffer@POLYN349729 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00705"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#705"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00705] In the recursive method org.apache.kafka.common.network.SslTransportLayer.readFromAppBuffer@POLYN345203 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String 'Remaining data in the network buffer, can't send SSL close message.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String 'Unexpected status returned by SSLEngine.wrap, expected CLOSED, received ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00164] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String '. Will not send close message to peer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00170] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String 'Failed to send SSL Close message' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00178] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String 'fileChannelBuffer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.common.network.SslTransportLayer.close@POLYN315125 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.common.network.SslTransportLayer.SslTransportLayer@POLYN312129 the MagicNumber/String '[SslTransportLayer channelId=%s key=%s] ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00663"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00663] In the recursive method org.apache.kafka.common.network.SslTransportLayer.peerPrincipal@POLYN343495 the MagicNumber/String 'SSL peer is not authenticated, returning ANONYMOUS instead' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00354] In the recursive method org.apache.kafka.common.network.SslTransportLayer.renegotiationException@POLYN326552 the MagicNumber/String 'Renegotiation is not supported' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#843"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00843] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00846] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00850] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#853"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00853] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00857] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 32768 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00868] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00878] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/SslTransportLayer.java.html#894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00894] In the recursive method org.apache.kafka.common.network.SslTransportLayer.transferFrom@POLYN350743 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
