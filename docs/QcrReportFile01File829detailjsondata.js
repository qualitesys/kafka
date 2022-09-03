console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java 40 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SaslServer"
 , "c2" : "org.apache.kafka.common.security.plain.internals.PlainSaslServer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.plain.internals.PlainSaslServer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "PlainSaslServer"
 , "c2" : "PlainSaslServer(CallbackHandler)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "byte[]"
 , "c2" : "evaluateResponse(byte[])"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<String>"
 , "c2" : "extractTokens(String)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "getAuthorizationID()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "getMechanismName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Object"
 , "c2" : "getNegotiatedProperty(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isComplete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "byte[]"
 , "c2" : "unwrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "byte[]"
 , "c2" : "wrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "dispose()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class PlainSaslServer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method evaluateResponse arguments byte[]  responseBytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00036] For method evaluateResponse list of called methods Object monObjet|java.util.List&lt;String&gt; extractTokensN172218"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'Authentication failed: username not specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'Authentication failed: password not specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'username' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'Authentication failed: credentials for user could not be verified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'Authentication failed: Invalid username or password' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  'Authentication failed: Client requested an authorization id that is different from username' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN171597 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method extractTokens arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  '\u0000' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN173952 the MagicNumber/String  'Invalid SASL/PLAIN response: expected 3 tokens, got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getAuthorizationID@POLYN175136 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method getNegotiatedProperty arguments String  propName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getNegotiatedProperty@POLYN175452 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getNegotiatedProperty@POLYN175452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method unwrap arguments byte[]  incoming|int  offset|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.unwrap@POLYN175798 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method wrap arguments byte[]  outgoing|int  offset|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.wrap@POLYN176203 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00132] The class PlainSaslServerFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method createSaslServer arguments String  mechanism|String  protocol|String  serverName|Map&lt;String ,? &gt;  props|CallbackHandler  cbh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.createSaslServer@POLYN176708 the MagicNumber/String  'Mechanism \'%s\' is not supported. Only PLAIN is supported.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method getMechanismNames arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.getMechanismNames@POLYN177233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.getMechanismNames@POLYN177233 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00129] Void method dispose is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00129] Void method dispose is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
