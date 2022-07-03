console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java 58 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SaslServer"
 , "c2" : "org.apache.kafka.common.security.scram.internals.ScramSaslServer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.scram.internals.ScramSaslServer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ScramSaslServer"
 , "c2" : "ScramSaslServer(ScramMechanism;Map<String,?>;CallbackHandler)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "evaluateResponse(byte[])"
 , "c3" : "10"
 , "c4" : "41"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getAuthorizationID()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getMechanismName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "getNegotiatedProperty(String)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isComplete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "unwrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "wrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "dispose()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setState(State)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyClientProof(ClientFinalMessage)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearCredentials()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00036] The class ScramSaslServer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method evaluateResponse arguments byte[]  response"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Unsupported extensions will be ignored, supported {}, provided {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'username' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Token Authentication failed: Invalid tokenId : ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Authentication failed: Invalid user credentials' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Authentication failed: Client requested an authorization id that is different from username' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Iterations ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  ' is less than the minimum ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  ' for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Authentication failed: Credentials could not be obtained' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Authentication failed: Invalid client final message' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String  'Unexpected challenge in Sasl server state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.getAuthorizationID@POLYN211314 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method getNegotiatedProperty arguments String  propName"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.getNegotiatedProperty@POLYN211662 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.getNegotiatedProperty@POLYN211662 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method unwrap arguments byte[]  incoming|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.unwrap@POLYN212330 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method wrap arguments byte[]  outgoing|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.wrap@POLYN212747 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method setState arguments State  state"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.setState@POLYN213191 the MagicNumber/String  'Setting SASL/{} server state to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method verifyClientProof arguments ClientFinalMessage  clientFinalMessage"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument clientFinalMessage is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.verifyClientProof@POLYN213435 the MagicNumber/String  'Invalid client credentials' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.verifyClientProof@POLYN213435 the MagicNumber/String  'Sasl client verification failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.clearCredentials@POLYN214239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.clearCredentials@POLYN214239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.clearCredentials@POLYN214239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00214] The class ScramSaslServerFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#217"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00217] For method createSaslServer arguments String  mechanism|String  protocol|String  serverName|Map&lt;String ,? &gt;  props|CallbackHandler  cbh"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.ScramSaslServerFactory.createSaslServer@POLYN214521 the MagicNumber/String  'Requested mechanism '%s' is not supported. Supported mechanisms are '%s'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.ScramSaslServerFactory.createSaslServer@POLYN214521 the MagicNumber/String  'Hash algorithm not supported for mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method getMechanismNames arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.common.security.scram.internals.ScramSaslServer.ScramSaslServerFactory.getMechanismNames@POLYN215374 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00188] Void method dispose is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00188] Void method dispose is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Unsupported extensions will be ignored, supported {}, provided {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'username' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Token Authentication failed: Invalid tokenId : ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Authentication failed: Invalid user credentials' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Authentication failed: Client requested an authorization id that is different from username' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String ' for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String ' is less than the minimum ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Iterations ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Authentication failed: Credentials could not be obtained' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Authentication failed: Invalid client final message' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslServer.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslServer.evaluateResponse@POLYN206536 the MagicNumber/String 'Unexpected challenge in Sasl server state ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
