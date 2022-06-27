console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java 49 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SaslClient"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OAuthBearerSaslClient"
 , "c2" : "OAuthBearerSaslClient(AuthenticateCallbackHandler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CallbackHandler"
 , "c2" : "callbackHandler()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "7"
 , "c4" : "19"
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
   "c1" : "SaslExtensions"
 , "c2" : "retrieveCustomExtensions()"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.svg" }

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
 , "c4" : "11"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class OAuthBearerSaslClient contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.hasInitialResponse@POLYN187145 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method evaluateChallenge arguments byte[]  challenge"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  'Expected empty challenge' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  'Sending %%x01 response to server after receiving an error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  'Successfully authenticated as {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String  'Unexpected challenge in Sasl client state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method unwrap arguments byte[]  incoming|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.unwrap@POLYN189793 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method wrap arguments byte[]  outgoing|int  offset|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.wrap@POLYN190210 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method getNegotiatedProperty arguments String  propName"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.getNegotiatedProperty@POLYN190621 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.getNegotiatedProperty@POLYN190621 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method setState arguments State  state"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.setState@POLYN190906 the MagicNumber/String  'Setting SASL/{} client state to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.retrieveCustomExtensions@POLYN191166 the MagicNumber/String  'Extensions callback is not supported by client callback handler {}, no extensions will be added' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.retrieveCustomExtensions@POLYN191166 the MagicNumber/String  'SASL extensions could not be obtained' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00147] The class OAuthBearerSaslClientFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method createSaslClient arguments String[]  mechanisms|String  authorizationId|String  protocol|String  serverName|Map&lt;String ,? &gt;  props|CallbackHandler  callbackHandler"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument callbackHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.OAuthBearerSaslClientFactory.createSaslClient@POLYN191867 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.OAuthBearerSaslClientFactory.createSaslClient@POLYN191867 the MagicNumber/String  'Callback handler must be castable to %s: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.OAuthBearerSaslClientFactory.createSaslClient@POLYN191867 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method getMechanismNames arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00125] Void method dispose is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00125] Void method dispose is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.retrieveCustomExtensions@POLYN191166"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.retrieveCustomExtensions@POLYN191166 the MagicNumber/String 'Extensions callback is not supported by client callback handler {}, no extensions will be added' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.retrieveCustomExtensions@POLYN191166 the MagicNumber/String 'SASL extensions could not be obtained' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 'Expected empty challenge' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 'Sending %%x01 response to server after receiving an error: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 'Successfully authenticated as {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClient.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClient.evaluateChallenge@POLYN187253 the MagicNumber/String 'Unexpected challenge in Sasl client state ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
