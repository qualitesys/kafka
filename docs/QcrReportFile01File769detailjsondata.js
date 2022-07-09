console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java 171 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Authenticator"
 , "c2" : "org.apache.kafka.common.security.authenticator.SaslServerAuthenticator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.authenticator.SaslServerAuthenticator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SaslServerAuthenticator"
 , "c2" : "SaslServerAuthenticator(Map<String,?>;Map<String,AuthenticateCallbackHandler>;String;Map<String,Subject>;KerberosShortNamer;ListenerName;SecurityProtocol;TransportLayer;Map<String,Long>;ChannelMetadataRegistry;Time;Supplier<ApiVersionsResponse>)"
 , "c3" : "5"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createSaslServer(String)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "SaslServer"
 , "c2" : "createSaslKerberosServer(AuthenticateCallbackHandler;Map<String,?>;Subject)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "authenticate()"
 , "c3" : "14"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "KafkaPrincipal"
 , "c2" : "principal()"
 , "c3" : "2"
 , "c4" : "5"
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
   "c1" : "boolean"
 , "c2" : "complete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleAuthenticationFailure()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reauthenticate(ReauthenticationContext)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "serverSessionExpirationTimeNanos()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c2" : "connectedClientSupportsReauthentication()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setSaslState(SaslState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setSaslState(SaslState;AuthenticationException)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "flushNetOutBufferAndUpdateInterestOps()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "flushNetOutBuffer()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "InetAddress"
 , "c2" : "serverAddress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InetAddress"
 , "c2" : "clientAddress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSaslToken(byte[])"
 , "c3" : "12"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "handleKafkaRequest(byte[])"
 , "c3" : "13"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "handleHandshakeRequest(RequestContext;SaslHandshakeRequest)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enableKafkaSaslAuthenticateHeaders(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleApiVersionsRequest(RequestContext;ApiVersionsRequest)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildResponseOnAuthenticateFailure(RequestContext;AbstractResponse)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendAuthenticationFailureResponse()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendKafkaResponse(RequestContext;AbstractResponse)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sendKafkaResponse(Send)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "12"
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
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "7"
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
 , "c4" : "96"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00075] The class SaslServerAuthenticator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument callbackHandlers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument subjects is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00131] The argument connectionsMaxReauthMsByMechanism is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  'No SASL mechanisms are enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  'Callback handler not specified for SASL mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  'Subject cannot be null for SASL mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  '{} for mechanism={}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.SaslServerAuthenticator@POLYN259235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method createSaslServer arguments String  mechanism"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00168] For method createSaslServer list of called methods Object monObjet|javax.security.sasl.SaslServer createSaslKerberosServerN262373"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#168"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00168] The argument mechanism is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslServer@POLYN261916 the MagicNumber/String  'kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslServer@POLYN261916 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslServer@POLYN261916 the MagicNumber/String  'Kafka Server failed to create a SaslServer to interact with a client during session authentication with server mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslServer@POLYN261916 the MagicNumber/String  'Kafka Server failed to create a SaslServer to interact with a client during session authentication with server mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method createSaslKerberosServer arguments AuthenticateCallbackHandler  saslServerCallbackHandler|Map&lt;String ,? &gt;  configs|Subject  subject"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00187] For method createSaslKerberosServer list of called methods Object monObjet|String SaslClientAuthenticator_firstPrincipalN263425|String kerberosName_serviceNameN263809|String kerberosName_hostNameN263889"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslKerberosServer@POLYN263224 the MagicNumber/String  'Principal has name with unexpected format ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslKerberosServer@POLYN263224 the MagicNumber/String  'Creating SaslServer for {} with mechanism {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.createSaslKerberosServer@POLYN263224 the MagicNumber/String  'Kafka Server failed to create a SaslServer to interact with a client during session authentication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.authenticate@POLYN264786 the MagicNumber/String  'Failed during {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00269] For method principal list of called methods Object monObjet|org.apache.kafka.common.security.auth.KafkaPrincipal principalBuilder_buildN267712"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.principal@POLYN267168 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.close@POLYN268614 the MagicNumber/String  'principal builder' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.close@POLYN268614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#305"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00305] For method reauthenticate arguments ReauthenticationContext  reauthenticationContext"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#305"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00305] For method reauthenticate list of called methods Object monObjet|org.apache.kafka.common.network.NetworkReceive reauthenticationContext_networkReceiveN269060"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#305"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00305] The argument reauthenticationContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.reauthenticate@POLYN268955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.reauthenticate@POLYN268955 the MagicNumber/String  'Invalid saslHandshakeReceive in server-side re-authentication context: null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.reauthenticate@POLYN268955 the MagicNumber/String  'Beginning re-authentication: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#336"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00336] For method setSaslState arguments SaslState  saslState"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method setSaslState arguments SaslState  saslState|AuthenticationException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270365 the MagicNumber/String  'Set SASL server state to {} during {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.setSaslState@POLYN270365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#354"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00354] For method flushNetOutBufferAndUpdateInterestOps list of called methods Object monObjet|boolean flushNetOutBufferN271226"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.flushNetOutBufferAndUpdateInterestOps@POLYN271139 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#379"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00379] For method handleSaslToken arguments byte[]  clientToken"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#379"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00379] For method handleSaslToken list of called methods Object monObjet|org.apache.kafka.common.network.ByteBufferSend ByteBufferSend_sizePrefixedN272796|org.apache.kafka.common.requests.RequestHeader RequestHeader_parseN273089|ApiKeys header_apiKeyN273183|short header_apiVersionN273258|org.apache.kafka.common.requests.RequestAndSize requestContext_parseRequestN273610"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  'Unexpected Kafka request of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  ' during SASL authentication.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  'Version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  ' is not supported for apiKey ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  'Authentication failed during ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String  ' due to invalid credentials with SASL mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method handleKafkaRequest arguments byte[]  requestBytes"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  'Unexpected Kafka request of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  ' during SASL handshake.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  'Handling Kafka request {} during {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  '%02x' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  20 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  'Received client packet of length {} starting with bytes 0x{}, process as GSSAPI packet' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  'First client packet is not a SASL mechanism request, using default mechanism GSSAPI' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  'Exception handling first SASL packet from client, GSSAPI is not supported by server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#515"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00515] For method handleHandshakeRequest arguments RequestContext  context|SaslHandshakeRequest  handshakeRequest"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#515"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00515] For method handleHandshakeRequest list of called methods Object monObjet|SaslHandshakeRequestData handshakeRequest_dataN280110|short context_header_apiVersionN280205"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#515"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00515] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#515"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00515] The argument handshakeRequest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleHandshakeRequest@POLYN279966 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleHandshakeRequest@POLYN279966 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleHandshakeRequest@POLYN279966 the MagicNumber/String  'Using SASL mechanism '{}' provided by client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleHandshakeRequest@POLYN279966 the MagicNumber/String  'SASL mechanism '{}' requested by client is not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleHandshakeRequest@POLYN279966 the MagicNumber/String  'Unsupported SASL mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00534] For method enableKafkaSaslAuthenticateHeaders arguments boolean  flag"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#538"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00538] For method handleApiVersionsRequest arguments RequestContext  context|ApiVersionsRequest  apiVersionsRequest"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#538"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00538] The argument apiVersionsRequest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleApiVersionsRequest@POLYN281438 the MagicNumber/String  'Unexpected ApiVersions request received during SASL authentication state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleApiVersionsRequest@POLYN281438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleApiVersionsRequest@POLYN281438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#555"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00555] For method buildResponseOnAuthenticateFailure arguments RequestContext  context|AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#555"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00555] For method buildResponseOnAuthenticateFailure list of called methods Object monObjet|org.apache.kafka.common.network.Send context_buildResponseSendN282817"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#555"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00555] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.sendAuthenticationFailureResponse@POLYN282937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.sendAuthenticationFailureResponse@POLYN282937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#567"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00567] For method sendKafkaResponse arguments RequestContext  context|AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#567"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00567] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#571"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00571] For method sendKafkaResponse arguments Send  send"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00577] The class ReauthInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00578"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00578] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00579] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00580] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00581] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00582] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00583] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00584] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#586"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00586] For method reauthenticating arguments String  previousSaslMechanism|KafkaPrincipal  previousKafkaPrincipal|long  reauthenticationBeginNanos"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#594"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00594] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticating@POLYN284297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.authenticationOrReauthenticationText@POLYN284407 the MagicNumber/String  're-authentication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.authenticationOrReauthenticationText@POLYN284407 the MagicNumber/String  'authentication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#601"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00601] For method ensurePrincipalUnchanged arguments KafkaPrincipal  reauthenticatedKafkaPrincipal"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#601"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00601] The argument reauthenticatedKafkaPrincipal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.ensurePrincipalUnchanged@POLYN284623 the MagicNumber/String  'Cannot change principals during re-authentication from %s.%s: %s.%s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00611"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#611"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00611] For method saslMechanismUnchanged arguments String  clientMechanism"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.saslMechanismUnchanged@POLYN285208 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.saslMechanismUnchanged@POLYN285208 the MagicNumber/String  'SASL mechanism '%s' requested by client is not supported for re-authentication of mechanism '%s'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00619"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00619] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.saslMechanismUnchanged@POLYN285208 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#623"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00623] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00631] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00632] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00639"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00639"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00642] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  'Authentication complete; session max lifetime from broker config={} ms, credential expiration={} ({} ms); session expiration = {} ({} ms), sending {} ms to client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  'Authentication complete; session max lifetime from broker config={} ms, no credential expiration; session expiration = {} ({} ms), sending {} ms to client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00657"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.calcCompletionTimesAndReturnSessionLifetimeMs@POLYN285707 the MagicNumber/String  'Authentication complete; session max lifetime from broker config={} ms, no credential expiration; no session expiration, sending 0 ms to client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.reauthenticationLatencyMs@POLYN287815 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#671"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00671] For method zeroIfNegative arguments long  value"
}} 
,
{ "ligne" : {
   "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.ReauthInfo.zeroIfNegative@POLYN288288 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00597] Public method authenticationOrReauthenticationText is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00458] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00468] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00473] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String ' during SASL handshake.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00473] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 'Unexpected Kafka request of type ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#475"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00475] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 'Handling Kafka request {} during {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00479] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00493] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String '%02x' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00494] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 20 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#497"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00497] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 'Received client packet of length {} starting with bytes 0x{}, process as GSSAPI packet' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00500] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 'First client packet is not a SASL mechanism request, using default mechanism GSSAPI' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00503] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String 'Exception handling first SASL packet from client, GSSAPI is not supported by server' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00507] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleKafkaRequest@POLYN276776 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00387] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00397] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String ' during SASL authentication.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 'Unexpected Kafka request of type ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00407] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String ' is not supported for apiKey ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00407] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 'Version ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00411] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00420] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00420] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00421] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00443] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String 'Authentication failed during ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerAuthenticator.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00445] In the recursive method org.apache.kafka.common.security.authenticator.SaslServerAuthenticator.handleSaslToken@POLYN272194 the MagicNumber/String ' due to invalid credentials with SASL mechanism ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
