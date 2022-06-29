console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java 257 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SslEngineFactory"
 , "c2" : "org.apache.kafka.common.security.ssl.DefaultSslEngineFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.ssl.DefaultSslEngineFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SSLEngine"
 , "c2" : "createClientSslEngine(String;int;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSLEngine"
 , "c2" : "createServerSslEngine(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldBeRebuilt(Map<String,Object>)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "reconfigurableConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyStore"
 , "c2" : "keystore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyStore"
 , "c2" : "truststore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSLContext"
 , "c2" : "sslContext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSLEngine"
 , "c2" : "createSslEngine(Mode;String;int;String)"
 , "c3" : "8"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "SslClientAuth"
 , "c2" : "createSslClientAuth(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "SecureRandom"
 , "c2" : "createSecureRandom(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "SSLContext"
 , "c2" : "createSSLContext(SecurityStore;SecurityStore)"
 , "c3" : "6"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "SecurityStore"
 , "c2" : "createKeystore(String;String;Password;Password;Password;Password)"
 , "c3" : "23"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "SecurityStore"
 , "c2" : "createTruststore(String;String;Password;Password)"
 , "c3" : "17"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.svg" }

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
 , "c4" : "70"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "147"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00057] The class DefaultSslEngineFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method createClientSslEngine arguments String  peerHost|int  peerPort|String  endpointIdentification"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method createServerSslEngine arguments String  peerHost|int  peerPort"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createServerSslEngine@POLYN252788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method shouldBeRebuilt arguments Map&lt;String ,Object &gt;  nextConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument nextConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.shouldBeRebuilt@POLYN253042 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.keystore@POLYN253773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.keystore@POLYN253773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.truststore@POLYN253983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.truststore@POLYN253983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.close@POLYN257539 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method createSslEngine arguments Mode  mode|String  peerHost|int  peerPort|String  endpointIdentification"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method createSslClientAuth arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslClientAuth@POLYN259188 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslClientAuth@POLYN259188 the MagicNumber/String  'Unrecognized client authentication configuration {}.  Falling ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslClientAuth@POLYN259188 the MagicNumber/String  'back to NONE.  Recognized client authentication configurations are {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslClientAuth@POLYN259188 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method createSecureRandom arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSecureRandom@POLYN259854 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSecureRandom@POLYN259854 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00222] For method createSSLContext arguments SecurityStore  keystore|SecurityStore  truststore"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String  'Created SSL context with keystore {}, truststore {}, provider {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00258] For method createKeystore arguments String  type|String  path|Password  password|Password  keyPassword|Password  privateKey|Password  certificateChain"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL private key can be specified only for PEM, but key store type is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL private key is specified, but certificate chain is not specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'Both SSL key store location and separate private key are specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL key store password cannot be specified with PEM format, only key password may be specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL certificate chain is specified, but private key is not specified' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL key store password cannot be specified with PEM format, only key password may be specified' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL key store is not specified, but key store password is specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  'SSL key store is specified, but key store password is not specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method createTruststore arguments String  type|String  path|Password  password|Password  trustStoreCerts"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  'SSL trust store certs can be specified only for PEM, but trust store type is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  'Both SSL trust store location and separate trust certificates are specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  'SSL trust store password cannot be specified for PEM format.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  'SSL trust store password cannot be specified for PEM format.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  'SSL trust store is not specified, but trust store password is specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00317] The class FileBasedStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.FileBasedStore@POLYN266729 the MagicNumber/String  'type must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.keyPassword@POLYN267551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.keyPassword@POLYN267551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.keyPassword@POLYN267551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method load arguments boolean  isKeyStore"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.load@POLYN268037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.load@POLYN268037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.load@POLYN268037 the MagicNumber/String  'Failed to load SSL keystore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.load@POLYN268037 the MagicNumber/String  ' of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#359"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00359] For method lastModifiedMs arguments String  path"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.lastModifiedMs@POLYN268880 the MagicNumber/String  'Modification time of key store could not be obtained: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.lastModifiedMs@POLYN268880 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#368"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00368] For method modified list of called methods Object monObjet|org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.SecurityStore lastModifiedMsN269381"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.modified@POLYN269306 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  'SecurityStore(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  'path=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  ', modificationTime=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedStore.toString@POLYN269618 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedPemStore.FileBasedPemStore@POLYN269983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#387"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00387] For method load arguments boolean  isKeyStore"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.FileBasedPemStore.load@POLYN270269 the MagicNumber/String  'Failed to load PEM SSL keystore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00399] The class PemStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#411"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00411] The argument certificateChain is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#411"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00411] The argument privateKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.PemStore@POLYN271561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.PemStore@POLYN271561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#416"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00416] The argument trustStoreCerts is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.PemStore@POLYN272019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.modified@POLYN272481 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#436"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00436] For method createKeyStoreFromPem arguments String  privateKeyPem|String  certChainPem|char[]  keyPassword"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createKeyStoreFromPem@POLYN272569 the MagicNumber/String  'PKCS12' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createKeyStoreFromPem@POLYN272569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createKeyStoreFromPem@POLYN272569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createKeyStoreFromPem@POLYN272569 the MagicNumber/String  'kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createKeyStoreFromPem@POLYN272569 the MagicNumber/String  'Invalid PEM keystore configs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00449] For method createTrustStoreFromPem arguments String  trustedCertsPem"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  'PKCS12' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  'kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.createTrustStoreFromPem@POLYN273428 the MagicNumber/String  'Invalid PEM truststore configs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00465] For method certs arguments String  pem"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00465] For method certs list of called methods Object monObjet|org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.SecurityStore certsN275004"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.certs@POLYN274384 the MagicNumber/String  'At least one certificate expected, but none found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.certs@POLYN274384 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.certs@POLYN274384 the MagicNumber/String  'X.509' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#478"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00478] For method privateKey arguments String  pem|char[]  keyPassword"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00503] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  'Private key not provided' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  'Expected one private key, but found ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.privateKey@POLYN275281 the MagicNumber/String  'Private key could not be loaded' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#511"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00511] For method keyFactory arguments String  algorithm"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemStore.keyFactory@POLYN277368 the MagicNumber/String  'Could not create key factory for algorithm ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00521] The class PemParser contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#525"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00525] The argument name is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  '-+%s\\s*.*%s[^-]*-+\\s+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  '\\s+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  '\\s*[^\\r\\n]*:[^\\r\\n]*[\\r\\n]+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  '([a-zA-Z0-9/+=\\s]*)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  'BEGIN' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  '(?:%s)*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.PemParser@POLYN278096 the MagicNumber/String  'END' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#539"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00539] For method pemEntries arguments String  pem"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00543] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  '\\s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  'No matching ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.PemParser.pemEntries@POLYN278996 the MagicNumber/String  ' entries in PEM file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createClientSslEngine@POLYN252511"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createServerSslEngine@POLYN252788"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.configure@POLYN254230 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00225] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSSLContext@POLYN260251 the MagicNumber/String 'Created SSL context with keystore {}, truststore {}, provider {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String '.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String 'SSL trust store certs can be specified only for PEM, but trust store type is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00292] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String 'Both SSL trust store location and separate trust certificates are specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String 'SSL trust store password cannot be specified for PEM format.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00299] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String 'SSL trust store password cannot be specified for PEM format.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00303] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String 'SSL trust store is not specified, but trust store password is specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00305] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00305] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00307] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createTruststore@POLYN264668 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00261] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String '.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00261] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL private key can be specified only for PEM, but key store type is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00262] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00263] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL private key is specified, but certificate chain is not specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00264] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'Both SSL key store location and separate private key are specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL key store password cannot be specified with PEM format, only key password may be specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00270] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL certificate chain is specified, but private key is not specified' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL key store password cannot be specified with PEM format, only key password may be specified' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00277] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00277] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL key store is not specified, but key store password is specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String 'SSL key store is specified, but key store password is not specified.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00282] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00284] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createKeystore@POLYN262457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createServerSslEngine@POLYN252788 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00188] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/DefaultSslEngineFactory.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.common.security.ssl.DefaultSslEngineFactory.createSslEngine@POLYN257750 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
