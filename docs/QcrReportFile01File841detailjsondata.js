console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java 66 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SaslClient"
 , "c2" : "org.apache.kafka.common.security.scram.internals.ScramSaslClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.scram.internals.ScramSaslClient" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ScramSaslClient"
 , "c2" : "ScramSaslClient(ScramMechanism;CallbackHandler)"
 , "c3" : "1"
 , "c4" : "4"
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
   "c1" : "boolean"
 , "c2" : "hasInitialResponse()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "evaluateChallenge(byte[])"
 , "c3" : "8"
 , "c4" : "31"
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
   "c1" : "Object"
 , "c2" : "getNegotiatedProperty(String)"
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
   "c1" : "ClientFinalMessage"
 , "c2" : "handleServerFirstMessage(char[])"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleServerFinalMessage(byte[])"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.svg" }

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
 , "c4" : "18"
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
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class ScramSaslClient contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.hasInitialResponse@POLYN177695 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method evaluateChallenge arguments byte[]  challenge"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Expected empty challenge' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Name:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Extensions callback is not supported by client callback handler {}, no extensions will be added' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'User name or extensions could not be obtained' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Invalid server nonce: does not start with client nonce' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Requested iterations ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  ' is less than the minimum ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  ' for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Password:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'User name could not be obtained' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Sasl authentication using ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  ' failed with error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String  'Unexpected challenge in Sasl client state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method unwrap arguments byte[]  incoming|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.unwrap@POLYN181790 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method wrap arguments byte[]  outgoing|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.wrap@POLYN182207 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method getNegotiatedProperty arguments String  propName"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.getNegotiatedProperty@POLYN182618 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.getNegotiatedProperty@POLYN182618 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method setState arguments State  state"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.setState@POLYN182903 the MagicNumber/String  'Setting SASL/{} client state to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method handleServerFirstMessage arguments char[]  password"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.handleServerFirstMessage@POLYN183155 the MagicNumber/String  'n,,' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.handleServerFirstMessage@POLYN183155 the MagicNumber/String  'Client final message could not be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method handleServerFinalMessage arguments byte[]  signature"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.handleServerFinalMessage@POLYN184221 the MagicNumber/String  'Invalid server signature in server final message' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.handleServerFinalMessage@POLYN184221 the MagicNumber/String  'Sasl server signature verification failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00192] The class ScramSaslClientFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method createSaslClient arguments String[]  mechanisms|String  authorizationId|String  protocol|String  serverName|Map&lt;String ,? &gt;  props|CallbackHandler  cbh"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.createSaslClient@POLYN184981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.createSaslClient@POLYN184981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.createSaslClient@POLYN184981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.createSaslClient@POLYN184981 the MagicNumber/String  'Requested mechanisms '%s' not supported. Supported mechanisms are '%s'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.createSaslClient@POLYN184981 the MagicNumber/String  'Hash algorithm not supported for mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method getMechanismNames arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.security.scram.internals.ScramSaslClient.ScramSaslClientFactory.getMechanismNames@POLYN186100 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00159] Void method dispose is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00159] Void method dispose is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Expected empty challenge' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Name:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Extensions callback is not supported by client callback handler {}, no extensions will be added' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'User name or extensions could not be obtained' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Invalid server nonce: does not start with client nonce' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String ' for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String ' is less than the minimum ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Requested iterations ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Password:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'User name could not be obtained' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String ' failed with error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Sasl authentication using ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramSaslClient.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.common.security.scram.internals.ScramSaslClient.evaluateChallenge@POLYN177803 the MagicNumber/String 'Unexpected challenge in Sasl client state ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
